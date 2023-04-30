import React from 'react';
import ItemList from './ItemList';
import FormInput from './FormInput';

const Form = ({ form, setForm }) => {
  const handleChange = (e) => {
    const { target } = e;
    setForm((preState) => {
      return {
        ...preState,
        [target.name]: target.value,
      };
    });
  };

  return (
    <div>
      <FormInput
        name='name'
        value={form.name}
        onChange={handleChange}
        label='Name'
        type='text'
      />
      <FormInput
        name='lastName'
        value={form.lastName}
        onChange={handleChange}
        label='Last Name'
        type='text'
      />
      <FormInput
        name='email'
        label='Email'
        value={form.email}
        onChange={handleChange}
        type='email'
      />
      <FormInput
        name='phone'
        label='Phone'
        value={form.phone}
        onChange={handleChange}
        type='text'
      />
      <FormInput
        name='address'
        label='Address'
        value={form.address}
        onChange={handleChange}
        type='text'
      />
      <FormInput
        name='postalCode'
        label='Postal Code'
        value={form.postalCode}
        onChange={handleChange}
        type='number'
      />
      <FormInput
        name='date'
        label='Date'
        value={form.date}
        onChange={handleChange}
        type='date'
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
