import React from 'react'
import '../style/style.css'

  const Theater = () => (
    // creando el div de teatro
    <div>
     {data.map(teatro => 
      <div className="theater mx-auto">
      <h1>Teatro</h1>
      <div className="piso mx-auto">
        <div>{teatro.teatroSelect.pisos.map(piso =>(
          <div>
            <h3>{piso.nombre}</h3>
          <div className="general mx-auto">{piso.secciones.map(seccion => (
            <div>
            <h3>{seccion.nombre}</h3>
            <div>{seccion.butacas.map((butacas, index) => (
              <div>{
                <div className="margin d-flex" key={index}>{butacas.map(asiento => (
                  <div className="butaca mx-auto float-right" key={asiento}>{asiento}</div>
                ))}</div>
              }
              </div>
            ))}</div>
            </div>
          ))}
          </div>
          </div>)       
         )}   
        </div>     
      </div>
    </div> )}
    </div>
    
  );

  export default Theater;