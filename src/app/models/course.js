import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
    },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // in months
        required: true
    },
    original_fee: {
        type: Number,
        required: true
    },
    discounted_fee: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export default Course;


