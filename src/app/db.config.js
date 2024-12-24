const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_MONGODB_URI, {
            dbName:"lms"    
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;