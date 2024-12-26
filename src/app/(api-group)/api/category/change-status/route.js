import { NextResponse } from 'next/server';
import Category from "@/app/models/category";
import connectDB from '@/app/db.config';

connectDB();
export async function PATCH(request) {

    const { id, new_status } = await request.json();

    if (!id || new_status === undefined) {
        return NextResponse.json({ message: 'Missing id or new_status', flag: 0 }, { status: 200 });
    }

    try {
        const category = await Category.findById(id);

        if (!category) {
            return NextResponse.json({ message: 'Category not found', flag: 0 }, { status: 200 });
        }

        category.status = new_status;
        await category.save();

        return NextResponse.json({ flag: 1, message: 'Category status updated successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}