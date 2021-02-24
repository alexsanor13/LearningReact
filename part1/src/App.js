import './App.css';
import Menu from './Menu.js'

const contacts =[
  { id : 1, name: 'alex sanchez', number: 671430311 },
  { id : 2, name: 'alex sancho', number: 111111111 },
  { id : 3, name: 'alex sancha', number: 222222222 },
  { id : 4, name: 'alejandro sanchi', number: 555555555 },
  { id : 5, name: 'aless sanchu', number: 671430333 },
  { id : 6, name: 'ale sanchoy', number: 671434567 },
  { id : 7, name: 'aleks sanchete', number: 124589345 },
  { id : 8, name: 'ales sanchurron', number: 101010101 },
  { id : 9, name: 'hola', number: 112412414 },
  { id : 10, name: 'hola', number: 112412415 }
]

export default function App() {
  return (
    <div>
      <Menu contacts = {contacts}/>
    </div>
  );
}
