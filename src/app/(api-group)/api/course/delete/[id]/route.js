import connectDB from "@/app/db.config";
import Course from "@/app/models/course";
import { NextResponse as response } from "next/server";

connectDB();
export async function DELETE(request, { params }) {
    const id = params.id;
    try {
        await Course.findByIdAndDelete(id);
        return response.json({ flag: 1, message: "Course deleted successfully" });
    } catch (error) {
        return response.json({ flag: 0, message: "Internal server error" });
    }
}