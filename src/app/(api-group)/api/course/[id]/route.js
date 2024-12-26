import connectDB from '@/app/db.config';
import Category from '@/app/models/category';
import { NextResponse } from 'next/server';

connectDB   // connect to database
export async function GET(req, { params }) {

    const { id } = params;

    try {
        const category = await Category.findById(id);
        if (!category) {
            return NextResponse.json({ error: 'Category not found', flag: 1 }, { status: 200 });
        }
        return NextResponse.json({ category, flag: 1 }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred while fetching the category', flag: 0 }, { status: 200 });
    }
}