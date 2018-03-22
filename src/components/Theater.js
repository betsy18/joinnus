import React from 'react'
import '../style/style.css'

const data = [{
  teatroSelect : {
    pisos: [ 
      {
        nombre: 'Piso 1',
        secciones: [
          {
            nombre: 'General',
            butacas: [
              [
                'A1', 'A2', 'A3', 'A4'
              ],
              [
                'B1', 'B2', 'B3', 'B4'
              ],
              
              ['C1', 'C2', 'C3', 'C4']
            ],
            precio: 35,
          }
        ]
      }
    ]
  },
  pisoSeleccionado : 'false',
  seccionSeleccionada : 'false',
  butacaSeleccionada : {
    fila: 1,
    columna: 1
  }
}
]

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