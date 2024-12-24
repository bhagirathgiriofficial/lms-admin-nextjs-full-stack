import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <FaExclamationTriangle className="text-yellow-500 text-6xl animate-bounce" />
                <h1 className="mt-4 text-4xl font-bold text-gray-800">404</h1>
                <p className="mt-2 text-lg text-gray-600">Page Not Found</p>
                <a href="/" className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;