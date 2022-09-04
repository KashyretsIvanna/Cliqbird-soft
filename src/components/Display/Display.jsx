import '../Display/Display.scss'
import Cover from '../CoverLetter/Cover'
import { useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import Textarea from '../Textarea/Textarea'
import Cases from '../Cases/Cases'
import Button from '../Button/Button'
const Display = () => {
  const options_hey = ['Us', 'Ca', 'Au', 'NL']
  const options_flow = [
    '1.Reserch',
    '2.Cold Calls',
    '3.Outreach',
    '4.Full Package',
  ]
  const [country, setCountry] = useState('')
  const [cases, setCase] = useState([''])
  const [flow, setFlow] = useState('')
  const [name, setName] = useState('')
  const [textarea, setTextarea] = useState(['', ''])
  const copyText = useRef()

  return (
    <>
      <div className="display">
        <div className="left">
          {/* Hey */}
          <div className="part">
            <div className="select">
              <input
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value)
                }}
                // placeholder="Hey!"
                type="text"
                className="select_field"
              />
              <div className="heyStart">Hey!</div>
              <button className="select_button" />
            </div>
            {country.trim() !== '' && (
              <ul className="option_container">
                {options_hey
                  .filter((el) =>
                    el.toLowerCase().includes(country.toLowerCase()),
                  )
                  .map((el) => (
                    <li
                      onClick={() => setCountry(el)}
                      className="option"
                      key={nanoid()}
                    >
                      {el}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          {/* Text area */}
          {textarea.map((el, index) => (
            <Textarea
              index={index}
              textarea={textarea}
              setTextarea={setTextarea}
              key={index}
            />
          ))}
          {/* Cases */}
          {cases.map((el, index) => (
            <Cases key={index} index={index} cases={cases} setCase={setCase} />
          ))}

          {/* Standard flow based on customer */}
          <div className="part">
            <div className="select">
              <input
                placeholder="Standard flow based on customer"
                type="text"
                className="select_field"
                onChange={(e) => setFlow(e.target.value)}
                value={flow}
              />
            </div>
            {flow.trim() !== '' && (
              <ul className="option_container">
                {options_flow
                  .filter((el) => el.toLowerCase().includes(flow.toLowerCase()))
                  .map((el) => (
                    <li
                      onClick={() => setFlow(el)}
                      className="option"
                      key={nanoid()}
                    >
                      {el}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          {/* name */}
          <div className="part">
            <div className="select">
              <input
                placeholder="Sender's name"
                type="text"
                className="select_field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Cover
          copyText={copyText}
          textarea={textarea}
          name={name}
          flow={flow}
          cases={cases}
          country={country}
        />
        <Button country={country} reference={copyText} />
      </div>
    </>
  )
}

export default Display

