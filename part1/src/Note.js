export const Note = ({ title, body }) => {
    return (
      <li>
        <p>
          {title}
          <br/>
          Body: {body}
        </p>
        <hr/>
      </li> 
    )
  }