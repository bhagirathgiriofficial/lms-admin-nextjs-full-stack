"use client";
import PageHeader from '@/components/admin/PageHeader'
import { axiosInstance, titleToSlug } from '@/library/helper';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

export default function page() {
    const name = useRef(null);
    const slug = useRef(null);
    const description = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const nameChangeHandler = () => {
        slug.current.value = titleToSlug(name.current.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            name: name.current.value,
            slug: slug.current.value,
            description: e.target.description.value
        }
        try {
            const response = await axiosInstance.post('/category/create', data);
            console.log(response);
            if (response.data.flag === 1) {
                e.target.reset();
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error.message)
            toast.error('An error occurred');
        }
    }

    if (!isClient) return null;

    return (
        <div className="bg-white text-gray-800 min-h-screen container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <PageHeader paths={["Dashboard", "Category", "Add"]} button={{ text: "Back to View", link: "/admin-panel/category" }} />
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full p-3 shadow-md rounded-lg overflow-hidden">
                        <div className='text-xl mb-3 py-3 border-b-[2px] font-bold'>Create Category</div>
                        <form onSubmit={submitHandler} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        ref={name}
                                        onChange={nameChangeHandler}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter category name"
                                        maxLength={30}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                                    Slug
                                </label>
                                <div className="mt-1">
                                    <input
                                        ref={slug}
                                        readOnly={true}
                                        type="text"
                                        name="slug"
                                        id="slug"
                                        className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter category slug"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows="4"
                                        className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter category description"
                                        maxLength={200}
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
