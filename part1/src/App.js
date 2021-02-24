import './App.css';
import Menu from './Menu.js'

const contacts =[
  { name: 'alex sanchez', number: 671430311 },
  { name: 'alex sancho', number: 111111111 },
  { name: 'alex sancha', number: 222222222 },
  { name: 'alejandro sanchi', number: 555555555 },
  { name: 'aless sanchu', number: 671430333 },
  { name: 'ale sanchoy', number: 671434567 },
  { name: 'aleks sanchete', number: 124589345 },
  { name: 'ales sanchurron', number: 101010101 },
  { name: 'hola', number: 112412414 },
  { name: 'hola', number: 112412415 }
]

export default function App() {
  return (
    <div>
      <Menu contacts = {contacts}/>
    </div>
  );
}
