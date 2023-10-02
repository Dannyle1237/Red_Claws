import React, { useState } from 'react';
import '../index.css';

const FriedBasket = ({header, changeWings, changeSide}) => {

  return (
        <div>
        {header === "Fried Wings Basket" && (
            <div>
            <h3>How many wings?</h3>
            <div className="radio-options">
                <label>
                <input type="radio" name="wing_option" value='1' onChange={changeWings}/>
                5 Wings
                </label>
                <label>
                <input type="radio" name="wing_option" value='2' onChange={changeWings}/>
                10 Wings
                </label>
            </div>
            </div>
        )}
        <h3>Pick a side</h3>
        <div className="radio-options">
        <div className="left-options">
            <label>
                <input type="radio" name="option" value="r_fries" onChange={changeSide} />
                Regular Fries
            </label>
            <label>
                <input type="radio" name="option" value="hushpuppies" onChange={changeSide} />
                Hushpuppies
            </label>
            <label>
                <input type="radio" name="option" value="c_fries" onChange={changeSide} />
                Cajun Fries (+$0.50)
            </label>
            </div>
            <div className="right-options">
            <label>
                <input type="radio" name="option" value="p_fries" onChange={changeSide} />
                Parm Fries (+$0.50)
            </label>
            <label>
                <input type="radio" name="option" value="cp_fries" onChange={changeSide} />
                Cajun Parm Fries (+$1.00)
            </label>
            <label>
                <input type="radio" name="option" value="sr_fries" onChange={changeSide} />
                Spicy Ranch Fries (+$0.50)
            </label>
            </div>
            </div>
        </div>
    )
};

export default FriedBasket;
