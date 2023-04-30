import EditCustomerPage from '@/components/templates/editCustomerPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// import axios from '@/services/axiosConfig';
import fetchData from '@/utils/fetchData';
// import connectDB from '@/services/connectDB';
// import Customer from '@/models/Customer';

const Edit = () => {
  const { data, getCustomer } = fetchData();

  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    getCustomer('customer', customerId);
  }, [isReady]);

  return <>
  {data && 
  <EditCustomerPage data={data} customerId={customerId} />}
  </>;
};

export default Edit;




// ! It was just practice (better way)

// export async function getStaticPaths() {
//   try {
//     await connectDB();
//     const customers = await Customer.find();
//     // console.log(customers);
//     const paths = customers.map((customer) => ({
//       params: { customerId: customer._id.toString() }
//     }))

//     return {
//       paths,
//       fallback:false
//     }
//   } catch (error) {
//     console.log(error);
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }

// }

// export async function getStaticProps(context) {
// const { customerId } = context.params;
// console.log(customerId);

// try {
//   await connectDB();
//   const customer = await Customer.findOne({ _id: customerId })

//   return {
//     props:{
//       customer: JSON.parse(JSON.stringify(customer))
//     }
//   }
// } catch (error) {
//   console.log(error);
// }

// }