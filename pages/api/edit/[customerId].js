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
    case 'PATCH':
      const id = req.query.customerId;
      const data = req.body.data.form;

      console.log(data.form);

      try {
        const customer = await Customer.findOne({ _id: id });
        customer.name = data.name;
        customer.lastName = data.lastName;
        customer.email = data.email;
        customer.phone = data.phone;
        customer.address = data.address;
        customer.postalCode = data.postalCode;
        customer.date = data.date;
        customer.products = data.products;
        customer.updatedAt = Date.now();

        customer.save();
        res.status(201).json({
          status: 'success',
          message: 'Edited customer successfully',
          data: customer,
        });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({
            status: 'failed',
            message: 'Error in retrievinig data from DataBase',
          });
      }
      break;

    default:
      break;
  }
}
