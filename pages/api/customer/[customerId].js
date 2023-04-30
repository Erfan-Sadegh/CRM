import Customer from '@/models/Customer';
import connectDB from '@/services/connectDB';

export default async function (req, res) {
  const { method } = req;

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: 'failed', message: 'Failed connecting to DB' });
  }

  switch (method) {
    case 'GET':
      const id = req.query.customerId;

      try {
        const customer = await Customer.findOne({ _id: id });
        res
          .status(201)
          .json({ status: 'success', message: 'Get customer successfully', data: customer });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ status: 'failed', message: 'Error to get customer' });
      }
      break;

    default:
      break;
  }
}
