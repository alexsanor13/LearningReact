const createDate = (date) => {
    let dateFormatted = new Date(date)
    return dateFormatted.toUTCString();
  }

export const Note = ({ id, content, date, important }) => {
    return (
      <li>
        <strong>
          {id}
        </strong>
        <p>
          {content}
          <br/>
          {createDate(date)}
          <br/> 
          Important: <strong>{important === true ? 'Yes' : 'No'}</strong>
        </p>
        <hr/>
      </li> 
    )
  }