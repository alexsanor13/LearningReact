import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react'

const rootElement = document.getElementById('root');

const App = () => {
    const [contador, setContador] = useState(0);

    const handleClick = (num) => {
      setContador(contador + num)
    };

    const handleClickMult = (num) => {
      setContador(contador * num)
    };

    const handleClickRes = () => {
      setContador(0)
    };

    const isEven = contador % 2 === 0;
    const mensajePar = isEven ? "Es par" : "Es impar";

    return (
      <div>
        <p>El valor del contador es: </p>
        <h1>{contador}</h1>
        <p>{mensajePar}</p>
        <button onClick= {() => handleClick(1)}>Incrementar</button>
        <button onClick= {() => handleClick(-1)}>Decrementar</button>
        <button onClick= {() => handleClickMult(2)}>Doble</button>
        <button onClick= {() => handleClickMult(0.5)}>Mitad</button>
        <button onClick= {handleClickRes}>Reset</button>
      </div>  
    );
  };

ReactDOM.render(
      <App  />,
      rootElement
    );

// const contador = useState(13);
// const contadorValue = contador[0];
// const updateContador = contador[1];

// const [contadorValue, updateContador] = useState(13);

// setInterval(() => {
//   updateContador(contadorValue + 1) 
// }, 2000);

// const App = (props) => {
//   return <h1>{props.contadorInicial}</h1>
// }

// let contador = 0

// const refresh = () => {
//   ReactDOM.render(
//     <App contadorInicial={contador} />,
//     rootElement
//   );
// }

// ********* Actualizar valor cada 1000 ms ***********
// setInterval(() =>{
//   ++contador
//   refresh()
// }, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
