import React, { useState } from 'react';
import '../index.css';
import SelectBox from './SelectBox';

const SeafoodBoil = ({sidesPrice, sides, changeSeafoodSides}) => {

const handleSelectChange = (event, side) => {
    const selectedQuantity = event.target.value;
    const updatedSides = {
        ...sides,
        [`${side}Q`]: selectedQuantity
    };

    // Pass the updated sides to the changeSeafoodSides function
    changeSeafoodSides(updatedSides);
    };

  return (
    <div>
        <h3>Pick your sides</h3>
        <div className="radio-options">
            <div className="left-options">
                {['corn', 'potato', 'sausage'].map((side) => 
                    <label>
                        {side.charAt(0).toUpperCase() + side.slice(1)} ${sidesPrice[side].toFixed(2)}ea&nbsp; 
                        <SelectBox onChange = {(event) => handleSelectChange(event, side)} value={sides[`${side}Q`]}></SelectBox>
                    </label>
                )}
            </div>
            <div className="right-options">
                {['egg', 'ramen'].map((side) => 
                    <label>
                        {side.charAt(0).toUpperCase() + side.slice(1)}:
                        <SelectBox onChange = {(event) => handleSelectChange(event, side)} value={sides[`${side}Q`]}></SelectBox>
                    </label>
                )}
            </div>
        </div>
    </div>
)
};

export default SeafoodBoil;
