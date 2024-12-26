"use client";
import PageHeader from '@/components/admin/PageHeader';
import { axiosInstance, titleToSlug } from '@/library/helper';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function AddCoursePage() {
    const title = useRef(null);
    const slug = useRef(null);
    const description = useRef(null);
    const image = useRef(null);
    const duration = useRef(null);
    const original_fee = useRef(null);
    const discounted_fee = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const titleChangeHandler = () => {
        slug.current.value = titleToSlug(title.current.value);
    };

    const submitHandler = async (e) => {
        toast.loading('Please wait...');
        e.preventDefault();
        const data = new FormData();
        data.append('title', title.current.value);
        data.append('slug', slug.current.value);
        data.append('description', description.current.value);
        data.append('image', image.current.files[0]);
        data.append('duration', duration.current.value);
        data.append('original_fee', original_fee.current.value);
        data.append('discounted_fee', discounted_fee.current.value);
        try {
            const response = await axiosInstance.post('/course/create', data);
            toast.dismiss();
            if (response.data.flag === 1) {
                e.target.reset();
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error('An error occurred');
        }
    };

    if (!isClient) return null;

    return (
        <div className="bg-white text-gray-800 min-h-screen container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <PageHeader paths={["Dashboard", "Course", "Add"]} button={{ text: "Back to View", link: "/admin-panel/course" }} />
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full p-3 shadow-md rounded-lg overflow-hidden">
                        <div className='text-xl mb-3 py-3 border-b-[2px] font-bold'>Create Course</div>
                        <form onSubmit={submitHandler} className="space-y-6">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            ref={title}
                                            onChange={titleChangeHandler}
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter course title"
                                            maxLength={100}
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
                                            placeholder="Enter course slug"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        ref={description}
                                        name="description"
                                        id="description"
                                        rows="4"
                                        className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter course description"
                                        maxLength={200}
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                    Image URL
                                </label>
                                <div className="mt-1">
                                    <input
                                        ref={image}
                                        type="file"
                                        name="image"
                                        id="image"
                                        className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div>
                                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                                        Duration (in months)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            ref={duration}
                                            type="number"
                                            name="duration"
                                            id="duration"
                                            className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter course duration"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="original_fee" className="block text-sm font-medium text-gray-700">
                                        Original Fee
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            ref={original_fee}
                                            type="number"
                                            name="original_fee"
                                            id="original_fee"
                                            className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter original fee"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="discounted_fee" className="block text-sm font-medium text-gray-700">
                                        Discounted Fee
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            ref={discounted_fee}
                                            type="number"
                                            name="discounted_fee"
                                            id="discounted_fee"
                                            className="block w-full p-2 mt-2 border focus:outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter discounted fee"
                                        />
                                    </div>
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
    );
}