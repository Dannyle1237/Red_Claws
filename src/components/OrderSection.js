import React, {useState} from 'react'
import "../index.css"
import FoodBox from './FoodBox'
import foodPic from "../static/Food.JPG"
import Overlay from './Overlay'

function OrderSection() {
  const appetizers = {
    "Fried Oysters": "Enjoy 8 pieces of our delicious fried oysters!",
    "Fried Calamari": "Enjoy a basket of freshly fried, crispy calamari!",
    "Fried Pickles": "Enjoy a basket of freshly fried pickles!",
    "Mozzarella Cheese Sticks": "Enjoy 6 pieces of our stretchy cheesy sticks",
    "Gumbo": "Enjoy a bowl of our warm gumbo"
  };
  const prices1 = ['11.99', '11.99', '9.99', '7.50', '7.99']
  const fried_baskets = {
    "Catfish Basket": "Enjoy 4 pieces of our cornmeal breaded and deep fried catfish, with a side of choice", 
    "Shrimp Basket": "Enjoy 8 pieces of our cornmeal breaded and deep fried shrimp, with a side of choice", 
    "Catfish and Shrimp Basket": "Enjoy 2 pieces of our deep fried catfish and 4 pieces of fried shrimp, with a side of choice", 
    "Fried Oyster Basket": "Enjoy 8 pieces of our deep fried oysters, with a side of choice", 
    "Fried Wings Basket": "Enjoy 5/10 pieces of our deep fried wings (1 flavor for 5 wings, 2 flavors with 10 wings), with a side of choice", 
    "Chicken Tender Basket": "Enjoy 4 pieces of our deep fried tenders, with a side of choice"}
  const prices2 = ['12.99', '13.99', '14.99', '13.99', '11.99/$17.99', '10.99']
  const seafood_boils = {
    "King Crab": "A delicious and succulent crab known for its large size and sweet meat.",
    "Snow Crab 1lb": "Tender snow crab legs, perfect for a satisfying seafood feast.",
    "Snow Crab 2 Clusters": "Snow crab clusters, a delightful option for crab lovers.",
    "Dungeness Crab": "Sweet and tender Dungeness crab, a West Coast seafood favorite.",
    "Head On Shrimp": "Whole shrimp with the head intact, offering a unique and flavorful seafood experience.",
    "Headless Shrimp": "Peeled and deveined shrimp, ready to be cooked and enjoyed.",
    "Frozen Crawfish": "Versatile and easy-to-prepare crawfish, perfect for a variety of dishes.",
    "Green Mussels": "Plump and flavorful green mussels, a delectable addition to seafood dishes.",
    "Black Mussels": "Rich and succulent black mussels, ideal for steaming or adding to pasta dishes.",
    "Lobster Tails": "Indulgent lobster tails, prized for their sweet, delicate meat."
  };
  
  const prices3 = ['58.99', '29.99', '34.99', '32.99', '11.50/$16.99','12,50/$18.99', '12.99', '12.99','12,99', '19.99']
  const bucket_deals = {
    "RC Bucket Deal #1": "1lb Shrimp and 1lb Crawfish with 1 piece corn potato and sausage.", 
    "RC Bucket Deal #2": "1lb Crawfish and 2 clusters Snow Crab with 2 pieces corn potato and sausage", 
    "RC Bucket Deal #3": "1lb Shrimp and 2 clusters Snow Crab with 2 pieces corn potato and sausage", 
    "RC Bucket Deal #4": "1lb King Crab and 1lb Shrimp with 2 pieces corn potato and sausage", 
    "RC Bucket Deal #5": "1lb Shrimp, 1lb Crawfish, and 2 clusters Snow Crab with 3 pieces corn potato sausage", 
    "RC Bucket Deal #6": "1lb Shrimp, 1lb King Crab, 2 clusters Snow Crab with 3 pieces corn potato sausage", 
    "RC Bucket Deal #7": "1lb Shrimp and 1 Lobster Tail with 2 pieces corn potato sausage"}
  const prices4 = ['32.00', '55.00', '56.00', '79.00', '71.00', '116.00', '42.00']
  
  const [overlayOpen, setOverlay] = useState(false);
  const [overlayHeader, setOverlayHeader] = useState('');
  const [overlayDescription, setOverlayDescription] = useState('');
  const [overlayType, setOverlayType] = useState('');
  const [overlayPrice, setOverlayPrice] = useState(0.00);


  const toggleOverlay = (header, description, type, price) => {
    setOverlay(!overlayOpen);
    setOverlayHeader(header);
    setOverlayDescription(description);
    setOverlayType(type);
    setOverlayPrice(price);
  };

  return (    
    <div className = "order-section">
        <div className = "left-order-section">
            <FoodBox toggleOverlay = {toggleOverlay} prices={prices1} items = {appetizers} picture = {foodPic} header="Appetizer"></FoodBox>
            <FoodBox toggleOverlay = {toggleOverlay} prices={prices2} items = {fried_baskets} picture = {foodPic} header="Fried Basket"></FoodBox>
        </div>
        <div className = "right-order-section">
            <FoodBox toggleOverlay = {toggleOverlay} prices={prices3} items = {seafood_boils} picture = {foodPic} header = "Seafood Boil"></FoodBox>
            <FoodBox toggleOverlay = {toggleOverlay} prices={prices4} items = {bucket_deals} picture = {foodPic} header = "Bucket Deals"></FoodBox>
        </div> 
        {overlayOpen ? 
        <Overlay 
          toggleOverlay = {toggleOverlay}
          header = {overlayHeader}
          description = {overlayDescription}
          type = {overlayType}
          price = {overlayPrice}
        ></Overlay>: <p></p>}
    </div>
  )
}

export default OrderSection
