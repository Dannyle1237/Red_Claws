import React from 'react'
import "../index.css"
import FoodBox from './FoodBox'
function OrderSection() {
  return (
    <div className = "order-section">
        <div className = "left-order-section">
            <FoodBox></FoodBox>
            <FoodBox></FoodBox>
        </div>
        <div className = "right-order-section">
            <FoodBox></FoodBox>
        </div> 
    </div>
  )
}

export default OrderSection
