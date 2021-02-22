import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.getElementById('root');


const App = () => {
    return (
      <div>
        Hola hola caracola
      </div>  
    );
  };

ReactDOM.render(
      <App  />,
      rootElement
    );

