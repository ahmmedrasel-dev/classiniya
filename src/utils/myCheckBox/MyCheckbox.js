import React from 'react';
import './checkbox.css'

const MyCheckbox = ({ label }) => {
  return (
    <label for="my-checkbox" class="checkbox-container flex items-center">
      <input type="checkbox" id="my-checkbox" class="checkbox-input mr-4" />
      <span class="checkbox-checkmark"></span>
      {label}
    </label>
  );
};

export default MyCheckbox;