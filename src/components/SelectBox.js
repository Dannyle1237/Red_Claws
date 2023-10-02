import React from 'react';

const SelectBox = ({ value, onChange }) => {
  return (
      <select
        value={value}
        onChange={onChange}
      >
        {[0, 1, 2, 3, 4, 5].map((quantity) => (
          <option key={quantity} value={quantity}>{quantity}</option>
        ))}
      </select>
  )
}

export default SelectBox;


