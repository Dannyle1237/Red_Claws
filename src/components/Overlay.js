import React, { useState } from 'react';
import '../index.css';
import FriedBasket from './FriedBasket'
import SeafoodBoil
 from './SeafoodBoil';
const Overlay = ({ toggleOverlay, header, description, type, price }) => {

  //Fried Baskets
  const [modifierPrice, setModifierPrice] = useState(0.00);
  const [selectedSide, setSide] = useState('');
  const [wingsQ, setWingsQ] = useState('1'); //1 = 5 wings, 2 = 10 wings

  //Build Your Own bag boils
  const [sfSides, setsfSides] = useState({
    'cornQ': 0,
    'potatoQ': 0,
    'sausageQ': 0,
    'eggQ': 0,
    'ramenQ': 0,
  });
  const [sidesPrice, setSidesPrice] = useState({
    'corn': 1.50,
    'potato': 2.99,
    'sausage': 4.99,
    'egg': 1.50,
    'ramen': 3.50,
  });

  const [lemonPepper, setLemonPepper] = useState(false);
  const [cajun, setCajun] = useState(false);
  const [garlic, setGarlic] = useState(false);
  const [spice, setSpice] = useState('mild'); 
  const [seafoodSidesCosts, setSeafoodSidesCost] = useState(0.00);

  const [basePrice, setBasePrice] = useState(price)
  const [quantity, setQuantity] = useState(1);

  const modifierPrices = {
    'r_fries': 0.00,
    'hushpuppies': 0.00,
    'c_fries': 0.50,
    'p_fries': 0.50,
    'cp_fries': 1.00,
    'sr_fries': 0.50
  };

  //Handle modifiers
  const changeSide = (event) => {
    const selectedValue = event.target.value;
    setSide(selectedValue);
    setModifierPrice(modifierPrices[selectedValue]);
  };

  //Handle number of wings
  const changeWings = (event) => {
    const selectedValue = event.target.value;
    setWingsQ(selectedValue);

    if (selectedValue === '1') {
      setBasePrice(11.99)
    } 
    else{
      setBasePrice(17.99)
    }
  };

  //Number of times dish is ordered
  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  //Handle Seafood Sides Costs
  const changeSeafoodSides = (updatedSides) => {
    setsfSides(updatedSides)
    setSeafoodSidesCost( (updatedSides['cornQ']*sidesPrice['corn']) + (updatedSides['potatoQ']*sidesPrice['potato']) + (updatedSides['sausageQ']*sidesPrice['sausage']) + (updatedSides['eggQ']*sidesPrice['egg']) + (updatedSides['ramenQ']*sidesPrice['ramen']));
  }

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={toggleOverlay}>Close</button>
        <h2>{header} (${price})</h2>
        <p>{description}</p>
        {type === "Fried Basket" ? (
         <FriedBasket header={header} changeWings={changeWings} changeSide={changeSide}></FriedBasket>
        ):type ==="Seafood Boil" ?(
          <SeafoodBoil sidesPrice = {sidesPrice} sides={sfSides} changeSeafoodSides={changeSeafoodSides}></SeafoodBoil>
        ):
        <div></div>}
        {type === "Fried Basket" ? (
          <p>Total: ${((parseFloat(basePrice) + modifierPrice) * quantity).toFixed(2)}</p>
        ):
        type === "Seafood Boil" ?(
          <p>Total: ${((parseFloat(basePrice) + parseFloat(seafoodSidesCosts)) * quantity).toFixed(2)}</p>
        ):
        <p>No Costs</p>
        }
        <label>
          Quantity:&nbsp;
          <select
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[1, 2, 3, 4, 5].map((quantity) => (
              <option key={quantity} value={quantity}>{quantity}</option>
            ))}
          </select>
        </label>
        <button>Add to Cart</button>
      </div>
    </div>
  );  
};

export default Overlay;
