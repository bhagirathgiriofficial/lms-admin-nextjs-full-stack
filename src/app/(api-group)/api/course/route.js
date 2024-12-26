import connectDB from "@/app/db.config";
import Course from "@/app/models/course";
import { NextResponse as reponse } from "next/server";

connectDB();

export async function GET(request) {
    try {
        const courses = await Course.find().sort({ createdAt: -1 });
        return reponse.json({ flag: 1, courses });
    } catch (error) {
        return reponse.json({ flag: 0, courses: [], message: error.message });
    }
}