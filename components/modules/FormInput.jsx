import React from 'react'

const FormInput = (props, ref) => {
  const { name, label, type, onChange, value } = props;

  return (
    <div className='mt-4'>
        <label htmlFor={name} className='block text-white pl-1'>{label}</label>
        <input type={type} name={name} id={name} value={value} onChange={onChange} className='text-white w-full border-0 outline-0 p-2 mt-1 rounded-lg bg-slate-800' />
    </div>
  )
}

export default FormInput