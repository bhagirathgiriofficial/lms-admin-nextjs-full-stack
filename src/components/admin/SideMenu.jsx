import Link from 'next/link';
import React from 'react';
import { FaUserGraduate, FaBook, FaTags, FaUsers, FaChalkboardTeacher, FaDashcube } from 'react-icons/fa';

const SideMenu = () => {
    const menuItems = [
        { icon: FaDashcube, label: "Dashboard", link: "/admin-panel" },
        { icon: FaUserGraduate, label: "Learners", link: "/admin-panel/learner" },
        { icon: FaBook, label: "Courses", link: "/admin-panel/course" },
        { icon: FaTags, label: "Category", link: "/admin-panel/category" },
        { icon: FaUsers, label: "Cohorts", link: "/admin-panel/cohort" },
        { icon: FaChalkboardTeacher, label: "Mentors", link: "/admin-panel/mentor" },
    ];
    return (
        <div className="min-h-screen bg-gray-800 text-white flex flex-col">
            <div className="flex items-center justify-center h-20 border-b border-gray-700">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            <div className="flex-grow">
                <ul className="mt-4">
                    {menuItems.map((item, index) => (
                        <li key={index} className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                            <Link href={item.link} className="flex items-center">
                                <item.icon className="mr-3" />
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;