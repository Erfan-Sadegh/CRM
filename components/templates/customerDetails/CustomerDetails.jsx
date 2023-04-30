import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from '@/services/axiosConfig'

const CustomerDetails = ({ data }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    const data = await axios.delete(`/customer?id=${id}`);
    if (data.status === 201) router.push('/');
  };

  return (
    <div className='max-w-[950px] mx-auto mt-8 px-4 text-white'>
      <h4 className='my-8 font-bold text-xl'>Customer Details</h4>
      <div className='bg-slate-800 flex flex-wrap gap-8 md:gap-10 lg:gap-20 px-4 py-10'>
        <div>
          <div>
            <span className='text-blue-300'>Name: </span>
            <span>{data.name} </span>
          </div>
          <div className='my-6'>
            <span className='text-blue-300'>Last Name: </span>
            <span> {data.lastName}</span>
          </div>
          <div>
            <span className='text-blue-300'>Email: </span>
            <span> {data.email}</span>
          </div>
        </div>
        <div>
          <div>
            <span className='text-blue-300'>Phone: </span>
            <span> {data.phone}</span>
          </div>
          <div className='mt-6'>
            <span className='text-blue-300'>Address: </span>
            <span> {data.address}</span>
          </div>
        </div>
        <div>
          <div className='mb-6'>
            <span className='text-blue-300'>Postal Code: </span>
            <span> {data.postalCode}</span>
          </div>
          <div>
            <span className='text-blue-300'>Date: </span>
            <span> {moment(data.date).utc().format('YYYY-MM-DD')}</span>
          </div>
        </div>
      </div>
      <div className='bg-slate-800 mt-6 px-4 py-8'>
        <div className='max-w-[650px] flex justify-between text-blue-300'>
          <p className='mb-4'>Name : </p>
          <p className='mb-4'>Price : </p>
          <p className='mb-4'>Qty : </p>
        </div>
        {data.products.map((product, index) => (
          <div
            className='flex justify-between max-w-[630px] mb-2 text-center'
            key={index}
          >
            <div>
              <p>{product.name}</p>
            </div>
            <div>
              <p>{product.price}</p>
            </div>
            <div className='text-center'>
              <p>{product.qty}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-slate-800 flex justify-between items-center flex-wrap gap-8 md:gap-10 lg:gap-20 mt-6 p-4'>
        <span>Edit or Delete ?</span>
        <button
          onClick={() => handleDelete(data._id)}
          className='border border-red-500 px-5 py-2 rounded text-red-400 transition hover:text-red-300 hover:border-red-400'
        >
          Delete
        </button>
        <Link
          className='border border-red-500 px-5 py-2 rounded text-green-400 transition hover:text-green-300 hover:border-green-400'
          href={`/edit/${data._id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default CustomerDetails;
