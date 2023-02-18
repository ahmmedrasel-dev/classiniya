import React from 'react';
import './checkbox.css'

const MyCheckbox = ({ label, id }) => {
  return (
    <label for={`my-checkbox${id}`} class="checkbox-container flex items-center dark:text-base-100">
      <input type="checkbox" id={`my-checkbox${id}`} class="checkbox border-base-100" />
      <span className='ml-4 capitalize'>{label}</span>
    </label>
  );
};

export default MyCheckbox;