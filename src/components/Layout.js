import React from 'react';
import seats from '../states/seats'

const Layout = ({choose, seats, see_seats}) => {
  const mapSvg = seats.map((seat)=> {
    return(
        <div>
          <svg key={seat.id} height="40" width="55">
          <rect cx="20" cy="20"  rx="10" ry="40" width="40" height="40"  fill={seat.color} onClick={(event)=>{choose(seat.id);}} />
        </svg>
        </div>
    )
  }) 

  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className="center-align" id={zone.display}>
          <div className="layout" onClick={
            (event)=>{see_seats();}
            }></div>
        </div>
        <div className="center-align" id={zone.svg}>
          {mapSvg}
        </div>
      </div>
   </div>
  )
}

export default Layout;