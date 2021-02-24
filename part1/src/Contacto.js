const Contacto = ({ name, number}) => {
    return (
      <li>
        <p>
          <strong>{name}</strong> - {number}
        </p>
        <hr/>
      </li> 
    )
  }

  export default Contacto