import Form from '@/components/modules/Form';
import React, { useEffect, useRef, useState } from 'react';
import axios from '@/services/axiosConfig';
import { useRouter } from 'next/router';

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    products: [],
    date: '',
  });

  const router = useRouter();

  const handleSave = async () => {
    const data = await axios.post('/customer', { data: form });

    console.log(data);

    if (data.status === 201) router.push('/');
  };
  const handleCancel = () => {
    setForm({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      products: [],
      date: '',
    });
    router.push('/');
  };

  return (
    <div className='max-w-[950px] mx-auto'>
      <h3 className='text-white mt-12 mb-8 font-bold text-xl'>
        Add New Cutomer
      </h3>
      <Form
      form={form}
      setForm={setForm}
      />
      <div className='mt-4 flex justify-between'>
        <button
          onClick={handleCancel}
          className='border border-red-500 px-5 py-2 rounded text-red-400 transition hover:text-red-300 hover:border-red-400'
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className='border border-green-500 px-5 py-2 rounded text-green-400 transition hover:text-green-300 hover:border-green-400'
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCustomerPage;
