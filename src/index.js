import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <p>
      Ejemplo webpack, si me vez funciona React
    </p>
  </div>
);

render(
  <App />,
  document.getElementById('root')
);
