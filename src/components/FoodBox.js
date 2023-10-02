import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring';

function FoodBox({header, picture, items, prices, toggleOverlay}) {
  const [expanded, setExpanded] = useState(false);
  const [cursorStyle, setCursor] = useState('default');

  //Since we are passing a dictionary, we grab array of keys to loop through
  const keys = Object.keys(items);

  
  const {height} = useSpring({
    from: {height: '200px'},
    to: {height:expanded ? `${200 + keys.length*40}px`: '200px'},
  });
  const bIcon = expanded ? '^': 'V';

  const textProps = useSpring({
    opacity: expanded ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div className = "food-box" style={{height}}>
      <div className = "left-food-box">
        <img src={picture} width="200px"></img>

        {keys.map((item, index) => (
          <animated.p style={textProps}>{item}</animated.p>
        ))}
        
      </div>
      <div className = "right-food-box">
        <p className="header">{header}</p>
       {expanded ? <p>Click on price to add</p>: <p>Tap Here</p>}
        <button style={{marginBottom: '3px'}}onClick={() => setExpanded(!expanded)}> {bIcon} </button>
        {prices.map((price, index) => (
          <div>
          {expanded ?
          <animated.p onClick={ () => toggleOverlay(keys[index], items[keys[index]], header, price)} 
            style={{...textProps, cursor:cursorStyle, textDecoration: 'underline' }}
            onMouseEnter={() => setCursor('pointer')} // Change cursor on hover
            onMouseLeave={() => setCursor('default')} // Reset cursor on mouse leave
            >${price}
          </animated.p>:
          <animated.p 
            style={{...textProps}}
          >${price}
          </animated.p>
          }
          </div>
        ))}
      </div>
    </animated.div>
  )
}

export default FoodBox;
