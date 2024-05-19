import React, { useEffect, useState } from 'react'
import Light from './Light'
import Seconds from './Seconds';

const TrafficLight = ({ initialIndex }) => {
  const [colorIndex, setColorIndex] = useState(initialIndex);
  const secondsDuration = [5000, 1000, 4000];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3)
    }, secondsDuration[colorIndex]);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <Seconds/>
      <div className="wrapper d-flex">
        <div>
          <div className='traffic-light-wrapper'>
            <Light color="#f00" active={colorIndex === 0} />
            <Light color="#ff0" active={colorIndex === 1} />
            <Light color="#0c0" active={colorIndex === 2} />
          </div>
          <div className="stand-wrapper">
            <div className="stand"></div>
            <div className="stand"></div>
          </div>
          <div className='stand-end'></div>
        </div>
      </div>
    </>
  )
}

export default TrafficLight