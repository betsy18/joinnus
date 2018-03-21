import React from 'react'


const Item = ({events}) => (
  <div className="carousel-item">
    {events.map(event => 
      <img className="d-block w-100" src={event} key={event} alt={event}
      />)}
  </div>
);


export default Item
