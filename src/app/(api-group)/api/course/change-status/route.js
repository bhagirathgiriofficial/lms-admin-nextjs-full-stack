import { NextResponse } from 'next/server';
import Course from "@/app/models/course";
import connectDB from '@/app/db.config';

connectDB();
export async function PATCH(request) {

    const { id, new_status } = await request.json();

    if (!id || new_status === undefined) {
        return NextResponse.json({ message: 'Missing id or new_status', flag: 0 }, { status: 200 });
    }

    try {
        const course = await Course.findById(id);

        if (!course) {
            return NextResponse.json({ message: 'Course not found', flag: 0 }, { status: 200 });
        }

        course.status = new_status;
        await course.save();

        return NextResponse.json({ flag: 1, message: 'Course status updated successfully' }, { status: 200 });
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}