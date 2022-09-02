import '../Input/Input.scss'
import { nanoid } from 'nanoid'

const Input = (props) => {
  const { placeholder, type, options, icon, cross } = props
  return (
    <>
      {type === 'input' && (
        <div className="part">
          <div className="select">
            <input
              placeholder={placeholder}
              type="text"
              className="select_field"
            />
            {icon && <button className="select_button" />}
            {cross && <button className="cross"></button>}
          </div>
          {options && (
            <ul className="option_container">
              {options.map((el) => (
                <li className="option" key={() => nanoid()}>
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {type === 'textarea' && (
        <>
          <textarea placeholder={placeholder} className="select_textarea" />
          <button className="cross"></button>
        </>
      )}
    </>
  )
}

export default Input
