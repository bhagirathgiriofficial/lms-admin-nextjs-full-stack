import connectDB from "@/app/db.config";
import Category from "@/app/models/category";
import { NextResponse as response } from "next/server";

connectDB();
export async function DELETE(request, { params }) {
    const id = params.id;
    try {
        await Category.findByIdAndDelete(id);
        return response.json({ flag: 1, message: "Category deleted successfully" });
    } catch (error) {
        return response.json({ flag: 0, message: "Internal server error" });
    }
}