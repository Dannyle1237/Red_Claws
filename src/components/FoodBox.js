import React from 'react'
import foodPic from "../static/Food.JPG"
function FoodBox() {
  return (
    <div className = "food-box">
      <div className = "left-food-box">
        <img src={foodPic} width="200px"></img>
      </div>
      <div className = "right-food-box">
        <p className="header">APPETIZERS</p>
        <p>Tap Here</p>
        <button>V</button>
      </div>
    </div>
  )
}

export default FoodBox;
