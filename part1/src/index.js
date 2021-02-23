import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.getElementById('root');


const App = ({color, numero}) => <div style={{color:color}}>Hola hola caracola {numero}</div>

ReactDOM.render(
      <App  color='blue' numero={3}/>,
      rootElement
    );

