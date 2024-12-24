import Category from "@/app/models/category";
import { NextResponse as response } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, slug, description } = body;
        const categoryExists = await Category.findOne({ name });
        if (categoryExists) return response.json({ message: "Category already exists", flag: 0 });

        const category = new Category({ name, slug, description });
        await category.save();
        return response.json({ message: "Category created", flag: 1 });
    } catch (error) {
        return response.json({ message: "Internal server error", error: error.message, flag: 0 });
    }
}