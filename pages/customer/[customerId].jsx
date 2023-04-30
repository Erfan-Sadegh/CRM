import CustomerDetails from '@/components/templates/customerDetails';
import Customer from '@/models/Customer';
import connectDB from '@/services/connectDB';
import React from 'react'

const CustomerDetail = ({ data }) => {
  return (
    <CustomerDetails data={data} />
  )
}

export default CustomerDetail;

export async function getStaticPaths() {
    try {
        await connectDB();
        const customers = await Customer.find();

        const paths = customers.map((customer) => ({
            params: { customerId: customer._id.toString() }
        }))

        return {
            paths,
            fallback: 'blocking'
        }
    } catch (error) {
        console.log(error);
        return {
            paths: [],
            fallback: false
        }
    }
}

export async function getStaticProps(ctx) {
    const { customerId } = ctx.params;

    try {
        await connectDB();
        const customer = await Customer.findOne({ _id: customerId })

        return {
            props:{
                data: JSON.parse(JSON.stringify(customer))
            }
        }
    } catch (error) {
        console.log(error);
        return {
            notFound: true
        }
    }

}