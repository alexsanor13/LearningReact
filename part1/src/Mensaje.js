const Mensaje = (props) => {
    console.log(props)
    const {color} = props
    return <h1 style={{color: color}}>
        {props.msg}
        </h1>
  }

  export default Mensaje 