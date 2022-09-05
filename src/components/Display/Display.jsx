import '../Display/Display.scss'
import Cover from '../CoverLetter/Cover'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Textarea from '../Textarea/Textarea'
import Cases from '../Cases/Cases'
import Button from '../Button/Button'
const Display = () => {
  const options_hey = ['Us', 'Ca', 'Au', 'NL']
  const [dataCases, setDataCases] = useState([])
  const [dataFlow, setDataFlow] = useState([])
  const [country, setCountry] = useState('')
  const [cases, setCase] = useState([''])
  const [flow, setFlow] = useState('')
  const [name, setName] = useState('')
  const [textarea, setTextarea] = useState([''])
  const [flowArray, setFlowArray] = useState([])
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    for (let i = 0; i < cases.length; i++) {
      setFlowArray((state) => [
        ...state.slice(0, i),
        ...dataCases.filter((el) => el.name === cases[i]),
        ...state.slice(i + 1, state.length),
      ])
    }
  }, [cases])

  useEffect(() => {
    fetch('../../../cases.json')
      .then((response) => response.json())
      .then((data) => setDataCases(data))
  }, [])

  useEffect(() => {
    fetch('../../../flow.json')
      .then((response) => response.json())
      .then((data) => setDataFlow(data))
  }, [])




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
                  setIsOpen(true)
                }}
                type="text"
                className="select_field"
              />
              <div className="heyStart">Hey!</div>
              <button className="select_button" />
            </div>
            {isOpen === true?
             country.trim() !== '' && (
              <ul className="option_container">
                {options_hey
                  .filter((el) =>
                    el.toLowerCase().includes(country.toLowerCase()),
                  )
                  .map((el) => (
                    <li
                      onClick={() => {
                        setIsOpen(false)
                        setCountry(el)
                      }}
                      className="option"
                      key={nanoid()}
                    >
                      {el}
                    </li>
                  ))}
              </ul>
            )
          :null}
           
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
            <Cases
              key={index}
              index={index}
              dataCases={dataCases}
              cases={cases}
              setCase={setCase}
              el={el}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))}

          {/* Standard flow based on customer */}
          <div className="part">
            <div className="select">
              <input
                placeholder="Standard flow based on customer"
                type="text"
                className="select_field"
                onChange={(e) =>{
                  setFlow(e.target.value)
                  setIsOpen(true)
                } }
                value={flow}
              />
            </div>
            {isOpen === true?
             flow.trim() !== '' && (
              <ul className="option_container">
                {dataFlow
                  .filter((el) =>
                    el.name.toLowerCase().includes(flow.toLowerCase()),
                  )
                  .map((el, index) => (
                    <li
                      onClick={() =>{
                        setFlow(el.name)
                        setIsOpen(false)
                      }}
                      className="option"
                      key={nanoid()}
                    >
                      {index + 1}. {el.name}
                    </li>
                  ))}
              </ul>
            ):
            null
            }
           
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
          textarea={textarea}
          firstFlow={
            [...dataFlow].filter((el) => el.name === flow)[0]
              ? [...dataFlow].filter((el) => el.name === flow)[0].firstArt
              : null
          }
          secondFlow={
            [...dataFlow].filter((el) => el.name === flow)[0]
              ? [...dataFlow].filter((el) => el.name === flow)[0].secondArt
              : null
          }
          data={flowArray}
          country={country}
          name={name}
        />
        <Button
          textarea={textarea}
          firstFlow={
            [...dataFlow].filter((el) => el.name === flow)[0]
              ? [...dataFlow].filter((el) => el.name === flow)[0].firstArt
              : null
          }
          secondFlow={
            [...dataFlow].filter((el) => el.name === flow)[0]
              ? [...dataFlow].filter((el) => el.name === flow)[0].secondArt
              : null
          }
          data={flowArray}
          name={name}
          country={country}
        />
      </div>
    </>
  )
}

export default Display
