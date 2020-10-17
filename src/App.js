import React from 'react';
import Info from './components/Info';
import Map from './components/Map';
import State from './context/State';

import fondo from './img/fondo.jpg';

function App() {
  return (
    <State>
      <div className="container" style={{height: '100vh', backgroundImage: `url(${fondo})`, backgroundSize: 'cover'}}>
      <div className="row container">
      <div className="col-8">
        <Info />
      </div>
      <div className="col-4" style={{height: '500px', marginTop: '65px'}}>
        <Map/>
      </div>
      </div>
      </div>
    </State>
  );
}

export default App;
