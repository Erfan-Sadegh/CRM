import Link from 'next/link';
import axios from '@/services/axiosConfig';
import { useRouter } from 'next/router';

const Card = (props) => {
    const {name, lastName, email, _id} = props;

    const router = useRouter();

    const handleDelete = async () => {
        // We can create a delete folder and create a dynamic file like [customerId].js and handle the delete customer
        // We can send a DELETE request like this: `/delete/${_id}` and get the id from qurey and handle the delete customer
        // But I want handle this logic in the customer file :-))
        
        const data = await axios.delete(`/customer?id=${_id}`);
        console.log(data.status);

        if (data.status === 201) router.reload();
    }

  return (
    <div className='flex justify-between items-center bg-slate-800 text-white p-4 rounded-lg mt-4'>
        <div className='flex gap-4'>
            <p>{name} {lastName}</p>
            <p>{email}</p>
        </div>
        <div className='flex gap-3'>
            <button onClick={() => handleDelete(_id)} className='border border-red-600 text-red-500 p-2 rounded-md'>Delete</button>
            <Link className='border border-green-600 text-green-500 p-2 rounded-md' href={`/edit/${_id}`}>Edit</Link>
            <Link className='border border-green-600 text-green-500 p-2 rounded-md' href={`/customer/${_id}`}>Details</Link>
        </div>
    </div>
  )
}

export default Card