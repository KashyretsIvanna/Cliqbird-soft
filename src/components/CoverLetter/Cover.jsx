import '../CoverLetter/Cover.scss'
import { nanoid } from 'nanoid'

const Cover = (props) => {
  const { country, textarea, data, firstFlow, secondFlow ,name} = props
  return (
    <div className="cover" >
      <div className="hey">Hey!{country}</div>
      <br /> <br />
      {textarea.map((el) => (
        <div key={nanoid()} className="textarea">
          {el}
          <br /> <br />
        </div>
      ))}
      <p>{firstFlow}</p>
      <br />
      <br />
      {data.map((el) => (
        <div key={nanoid()}>
          <p>{el.url}</p> <br />
          <p>{el.text}</p>
          <br />
          <br />
        </div>
      ))}
      <p>{secondFlow}</p><br/>
      <p>See soon,</p>
      <p>{name}</p>
    </div>
  )
}

export default Cover


