import { nanoid } from 'nanoid'
import '../Cases/Cases.jsx'
const Cases = (props) => {
  const { cases, setCase, index } = props;
  const options_cases = [
    '1.Digital M.',
    '2.Ecommrse',
    '3.SasS(Jenna)',
    '4.SasS(Adapty)',
    '5.Web Design',
  ]

  const caseHandler = (e) => {
    setCase((state) => [
      ...state.slice(0, index),
      e.target.value,
      ...state.slice(index + 1, state.length),
    ])
    console.log(index)
  }
  return (
    <div className="part">
      <div className="select">
        <input
          onChange={(e) => caseHandler(e)}
          placeholder="Company cases"
          type="text"
          className="select_field"
          // onChange={(e) => setCase(e.target.value)}
          value={cases[index]}
        />
        <button className="select_button" />
        <button
          onClick={() => setCase((state) => [...state, ''])}
          className="cross"
        ></button>
      </div>
      {cases[index].trim() !== '' && (
        <ul className="option_container">
          {options_cases
            .filter((el) =>
              el.toLowerCase().includes(cases[index].toLowerCase()),
            )
            .map((el) => (
              <li
                onClick={() =>
                  setCase((state) => [
                    ...state.slice(0, index),
                    el,
                    ...state.slice(index + 1, state.length),
                  ])
                }
                className="option"
                key={() => nanoid()}
              >
                {el}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default Cases
