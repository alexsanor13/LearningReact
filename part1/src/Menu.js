import './Menu.css';
import {useState} from 'react'
// import Contactos from 'Contactos.js'

const INITIAL_CONTACT = {
    name: '',
    number: 0
};

const MAX_NUMBER = 999999999;
const MIN_NUMBER = 100000000;
const MAX_LENGTH = 40;

const Menu = ({contacts}) => {
    const [filter, setFilter] = useState(INITIAL_CONTACT)
    const [contact, setContact] = useState(INITIAL_CONTACT)
    const [contactsList, setContactsList] = useState(contacts)

    const handleFilterByName = (event) => {
        console.log('se filtra el nombre con: ' + event.target.value)
        const newFilter = {
            ...filter,
            name: event.target.value
        }
        setFilter(newFilter)
    }

    const handleFilterByNumber = (event) => {
        console.log('se filtra el numero con: ' + event.target.value)
        const newFilter = {
            ...filter,
            number: event.target.value
        }
        setFilter(newFilter)
    }

    const handleName = (event) => {
        const newContact = {
            ...contact,
            name: event.target.value
        }
        setContact(newContact)
    }

    const handleNumber = (event) => {
        const newContact = {
            ...contact,
            number: event.target.value
        }
        setContact(newContact)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setContactsList([...contactsList, contact])
        console.log(contactsList)
        setContact(INITIAL_CONTACT)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <label>filter by name</label>
            <input type='text' onChange={handleFilterByName} value={filter.name} maxLength={MAX_LENGTH} />
            <br />
            <label>filter by number</label>
            <input type='number' onChange={handleFilterByNumber} value={filter.number !== 0 ? filter.number : '' } min={MIN_NUMBER} max={MAX_NUMBER}/>
            <hr/>
            <form onSubmit={handleSubmit}>
                <h1>add new contact</h1>
                <label>
                    name
                    <input type='text' onChange={handleName} value={contact.name} maxLength={MAX_LENGTH} />
                </label>
                <br />  
                <label>
                    number
                    <input type='number' onChange={handleNumber} value={contact.number !== 0 ? contact.number : '' } min={MIN_NUMBER} max={MAX_NUMBER}/>
                </label>
                <br />
                <button>add</button>
            </form>
            <hr/>
        </div>
    )
}

export default Menu