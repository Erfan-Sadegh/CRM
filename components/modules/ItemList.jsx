import React from 'react';
import FormInput from './FormInput';

const ProductItem = ({ product, handleChange, handleRemoveItem }) => {
  return (
    <div className='p-3 border border-gray-500 rounded-xl mt-4'>
      <FormInput
        label='Product Name'
        name='name'
        value={product.name}
        onChange={handleChange}
        type='text'
      />
      <div className='mt-8 flex justify-between'>
        <FormInput
          label='Price'
          name='price'
          value={product.price}
          onChange={handleChange}
          type='text'
        />
        <FormInput
          label='Qty'
          name='qty'
          value={product.qty}
          onChange={handleChange}
          type='number'
        />
      </div>
      <button
        onClick={handleRemoveItem}
        className='w-full border border-red-400 p-2 rounded-lg mt-8 text-red-500'
      >
        Remove Item
      </button>
    </div>
  );
};

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const handleAddItem = () => {
    setForm((preItem) => {
      return {
        ...preItem,
        products: [
          ...products,
          {
            name: '',
            price: '',
            qty: '',
          },
        ],
      };
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm(preState => {
      return {
        ...preState,
        products: newProducts
      }
    });
  };

  const handleRemoveItem = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm(preState => {
      return {
        ...preState,
        products: newProducts
      }
    });
  };

  return (
    <div className='p-3 mt-10 border border-gray-500 rounded-xl'>
      <p className='text-white'>Purchased products</p>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          handleChange={(e) => handleChange(e, index)}
          handleRemoveItem={() => handleRemoveItem(index)}
        />
      ))}
      <button
        onClick={handleAddItem}
        className='w-full border border-green-400 p-2 rounded-lg mt-8 text-green-500'
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemList;
