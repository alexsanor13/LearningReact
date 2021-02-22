import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react'

const rootElement = document.getElementById('root');

const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  mensaje : 'Click para contar'
}

const App = (props) => {
    const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
      const newCountersState = {
        ...counters,
        left: counters.left + 1,
        mensaje: 'Se ha hecho click en la izquierda'
      }
      setCounters(newCountersState);
      setClicks(prevClicks =>[...prevClicks,'L'])
    };

    const handleClickRight = () => {
      const newCountersState = {
        ...counters,
        right: counters.right + 1,
        mensaje: 'Se ha hecho click en la derecha'
      }
      setCounters(newCountersState);
      setClicks(prevClicks =>[...prevClicks,'R'])
    };

    const handleClickReset = () => {
      setCounters(INITIAL_COUNTER_STATE);
      setClicks([])
    };
    
    return (
      <div>
        {counters.left}
        <button onClick= {handleClickLeft}>Left</button>
        <button onClick= {handleClickRight}>Right</button>
        {counters.right}
        <h1>{counters.mensaje}</ h1>
        <p>Orden de clicks: {clicks.join(', ')}</p>
        <button onClick= {handleClickReset}>Reset</button>
        {clicks.length === 0
          ? <h1>No se han registrado clicks</h1>
          : <h1>Se han hecho {clicks.length} clicks </h1>
        }

      </div>  
    );
  };

ReactDOM.render(
      <App  />,
      rootElement
    );

