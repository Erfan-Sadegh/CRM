import Image from 'next/image';
import { Inter } from 'next/font/google';
import connectDB from '@/services/connectDB';
import Customer from '@/models/Customer';
import { useRouter } from 'next/router';
import Card from '@/components/modules/Card';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ customers }) {
  return (
    <div className='max-w-[950px] mx-auto px-4 mt-8'>
      {customers.length !== 0 && (
        customers.map((customer) => (
          <Card key={customer._id} {...customer} />
        ))
      )}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    await connectDB();
    const customers = await Customer.find();

    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
