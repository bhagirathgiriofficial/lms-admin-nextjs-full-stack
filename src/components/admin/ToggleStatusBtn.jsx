"use client";
import { axiosInstance } from '@/library/helper';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function ToggleStatusBtn({ endpoint, id, current_status }) {
  const [status, setStatus] = useState(current_status);

  const statusChangeHandler = () => {
    toast.loading('Changing status...');
    axiosInstance.patch(endpoint, { id, new_status: !status })
      .then(res => {
        toast.dismiss();
        if (res.data.flag == 1) {
          setStatus(!status);
          toast.success(res.data.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const buttonStyle = {
    color: status ? 'green' : 'red'
  };
  return (
    <button className='border p-2 rounded' style={buttonStyle} onClick={statusChangeHandler}>
      {status ? 'Active' : 'Inactive'}
    </button>
  )
}
