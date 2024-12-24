"use client";

import { axiosInstance } from '@/library/helper'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa'

export default function DeleteBtn({ endpoint }) {
    const router = useRouter();

    const deleteHandler = () => {
        axiosInstance.delete(endpoint)
            .then(response => {
                if (response.data.flag == 1) {
                    router.refresh();
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }

    return (
        <button onClick={deleteHandler} className="text-red-500 hover:text-red-700">
            <FaTrash />
        </button>
    )
}
