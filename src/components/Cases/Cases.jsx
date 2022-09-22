import { nanoid } from 'nanoid'
import '../Cases/Cases.jsx'
const Cases = (props) => {
  const { cases, setCase, index, dataCases, isOpen, setIsOpen, changeData } = props

  const caseHandler = (e) => {
    setCase((state) => [
      ...state.slice(0, index),
      e.target.value,
      ...state.slice(index + 1, state.length),
    ])
  }

  return (
    <div className="part">
      <div className="select">
        <input
          onChange={(e) => {
            caseHandler(e)
            setIsOpen(true)
          }}
          placeholder="Company cases"
          type="text"
          className="select_field"
          value={cases[index]}
        />
        <button className="select_button" />
        {index === 0 && (
          <button
            onClick={() => {
              setCase((state) => [...state, ''])
            }}
            className="cross"
          ></button>
        )}
      </div>
      {isOpen === true ?
        cases[index].trim() !== '' && (
          <ul className="option_container">
            {dataCases
              .filter((el) =>
                el.name.toLowerCase().includes(cases[index].toLowerCase()),
              ).filter(el => changeData.filter(ch => ch.id === el.id).length === 0)
              .map((el, ind) => (
                <li
                  onClick={() => {
                    setIsOpen(false)
                    setCase((state) => [
                      ...state.slice(0, index),
                      el.name,
                      ...state.slice(index + 1, state.length),
                    ])
                  }
                  }
                  className="option"
                  key={nanoid()}
                >
                  {ind + 1}. {el.name}
                </li>
              ))}
          </ul>
        )
        : null
      }
    </div>
  )
}

export default Cases
