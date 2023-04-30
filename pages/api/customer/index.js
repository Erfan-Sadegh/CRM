import Customer from '@/models/Customer';
import connectDB from '@/services/connectDB';

export default async function handler(req, res) {
  const { method } = req;

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: 'failed', message: 'Falied Connecting to DB' });
  }

  switch (method) {
    case 'POST':
      const { data } = req.body;
      if (!(data.name || data.lastName || data.email)) {
        return res
          .status(400)
          .json({ status: 'failed', message: 'Invalid data' });
      }

      try {
        const customer = await Customer.create(data);
        res.status(201).json({
          status: 'success',
          message: 'Customer created successfully',
          data: customer,
        });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ status: 'failed', message: 'Failed to storing customer' });
      }
      break;

    case 'DELETE':
      const { id } = req.query;
      console.log(id);
      await Customer.deleteOne({ _id: id });
      res
        .status(201)
        .json({ status: 'success', message: 'Successfully deleted' });
      break;

    default:
      break;
  }
}
