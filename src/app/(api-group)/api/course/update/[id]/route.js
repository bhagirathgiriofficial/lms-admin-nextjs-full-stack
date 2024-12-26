import connectDB from "@/app/db.config";
import Category from "@/app/models/category";
import { NextResponse } from "next/server";

connectDB();

export async function PUT(request, { params }) {
    const id = params?.id;
    const { name, slug, description } = await request.json();
    try {
        await Category.updateOne({ _id: id }, { name, slug, description }); // update category
        return NextResponse.json({ message: 'Category updated successfully', flag: 1 }, { status: 200 });

    } catch (error) {
        console.log(error.message); ``
        return NextResponse.json({ message: 'An error occurred while updating the category', flag: 0 }, { status: 200 });
    }
}