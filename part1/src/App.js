import './App.css';
import Mensaje from './Mensaje.js'

const Detalles = () => {
  return <div>Detalles cositasss</div>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' msg='tamo en ello'/>
      <Mensaje color='yellow' msg='tamo trabajando'/>
      <Mensaje color='green' msg='full energia'/>
      <Mensaje color='grey' msg='peña'/>
      <Detalles />
    </div>
  )
}

export default App;
