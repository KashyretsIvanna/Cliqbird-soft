import '../CoverLetter/Cover.scss'
import { nanoid } from 'nanoid'

const Cover = (props) => {
  const { country, textarea, copyText } = props
  return (
    <div className="cover" ref={copyText}>
      <div className="hey">Hey!{country}</div>
      <div className="intro">
        
      </div>
      {textarea.map((el) => (
        <div key={nanoid()} className="textarea">
          {el}
        </div>
      ))}
    </div>
  )
}

export default Cover
