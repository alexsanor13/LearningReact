import './App.css';
import Mensaje from './Mensaje.js'
import Detalles from './Detalles.js'

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' msg='tamo en ello'/>
      <Mensaje color='yellow' msg='tamo trabajando'/>
      <Mensaje color='green' msg='full energia'/>
      <Mensaje color='grey' msg='peña'/>
      <Detalles color='purple' />
    </div>
  )
}

export default App;
