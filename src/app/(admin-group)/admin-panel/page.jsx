import React from 'react';
import { FaUsers, FaBook, FaUserPlus } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <FaUsers className="text-blue-500 text-3xl mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Total Users</h2>
                        <p className="text-gray-600">1500</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <FaBook className="text-green-500 text-3xl mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Total Courses</h2>
                        <p className="text-gray-600">75</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <FaUserPlus className="text-red-500 text-3xl mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">New Enrollments</h2>
                        <p className="text-gray-600">120</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;