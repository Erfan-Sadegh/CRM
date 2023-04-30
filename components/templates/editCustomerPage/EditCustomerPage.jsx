import Form from '@/components/modules/Form';
import moment from 'moment'
import { useEffect, useRef, useState } from 'react';

import axios from '@/services/axiosConfig';
import { useRouter } from 'next/router';

const EditCustomerPage = ({ data, customerId }) => {
  const date = data.date ? moment(data.date).utc().format('YYYY-MM-DD') : '';

  const [form, setForm] = useState({
    name: data.name || '',
    lastName: data.lastName || '',
    email: data.email || '',
    phone: data.phone || '',
    address: data.address || '',
    postalCode: data.postalCode || '',
    products: data.products || '',
    date: date,
  });

  const router = useRouter();

  const handleEdit = async () => {
    const data = await axios.patch(`/edit/${customerId}`, {
      data: {
        form
      },
    });
    if (data.status === 201) router.push('/');
  };

  const handleCancel = () => {
    router.push('/')
  }

  return (
    <div className='max-w-[950px] mx-auto mt-8 px-4'>
      <h4 className='text-white text-xl font-bold'>Edit customer</h4>
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
          onClick={handleEdit}
          className='border border-green-500 px-5 py-2 rounded text-green-400 transition hover:text-green-300 hover:border-green-400'
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditCustomerPage;
