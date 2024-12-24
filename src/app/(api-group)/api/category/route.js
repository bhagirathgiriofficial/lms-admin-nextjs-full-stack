import connectDB from "@/app/db.config";
import Category from "@/app/models/category";
import { NextResponse as reponse } from "next/server";

connectDB();

export async function GET(request) {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        return reponse.json({ flag: 1, categories });
    } catch (error) {
        return reponse.json({ flag: 0, categories: [], message: error.message });
    }
}