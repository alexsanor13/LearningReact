import './Menu.css';
import {useState, useEffect} from 'react'
import Contacto from './Contacto.js'

const INITIAL_CONTACT = {
    name: '',
    number: 100000000
};

const MAX_NUMBER = 999999999;
const MIN_NUMBER = 100000000;
const MAX_LENGTH = 40;

const Menu = ({contacts}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState(MIN_NUMBER)
    const [contact, setContact] = useState(INITIAL_CONTACT)
    const [contactsList, setContactsList] = useState(contacts)

    useEffect(() => {
        let filteredContacts = contacts;
        filteredContacts = filteredContacts
                            .filter(c => name === '' ? true : c.name.includes(name))
                            .filter(c => number === MIN_NUMBER ? true : String(c.number).includes(String(number)))
        setContactsList(filteredContacts)
    }, [contacts, name, number])

    const handleFilterByName = (event) => {
        console.log('se filtra el nombre con: ' + event.target.value)
        setName(event.target.value)
    }

    const handleFilterByNumber = (event) => {
        console.log('se filtra el numero con: ' + event.target.value)
        setNumber(event.target.value)
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
        if(contact.name !== '' && contact.number !== MIN_NUMBER) {
            setContactsList([...contactsList, contact])
            console.log(contactsList)
            setContact(INITIAL_CONTACT)
        }
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <label>filter by name</label>
            <input type='text' onChange={handleFilterByName} value={name} maxLength={MAX_LENGTH} />
            <br />
            <label>filter by number</label>
            <input type='number' onChange={handleFilterByNumber} value={number !== MIN_NUMBER ? number : '' } min={MIN_NUMBER} max={MAX_NUMBER}/>
            <hr/>
            <form onSubmit={handleSubmit}>
                <h2>add new contact</h2>
                <label>
                    name
                    <input type='text' onChange={handleName} value={contact.name} maxLength={MAX_LENGTH} />
                </label>
                <br />  
                <label>
                    number
                    <input type='number' onChange={handleNumber} value={contact.number !== MIN_NUMBER ? contact.number : '' } min={MIN_NUMBER} max={MAX_NUMBER}/>
                </label>
                <br />
                <button>add</button>
            </form>
            <hr/>
            <ul>
            {contactsList
                .map(c => (
                <Contacto key={c.number} {...c}></Contacto> 
                ))}
            </ul>
        </div>
    )
}

export default Menu