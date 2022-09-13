import '../Display/Display.scss'
import Cover from '../CoverLetter/Cover'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Textarea from '../Textarea/Textarea'
import Cases from '../Cases/Cases'
import Button from '../Button/Button'
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
polyfillCountryFlagEmojis();
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

const FranceFR = '\u{1F1EB}\u{1F1F7}'
const SpainES =  '\u{1F1EA}\u{1F1F8}'
const UnitedStatesUS = '\u{1F1FA}\u{1F1F8}'
const ChinaCN = '\u{1F1E8}\u{1F1F3}'
const ItalyIT = '\u{1F1EE}\u{1F1F9}'
const MexicoMX = '\u{1F1F2}\u{1F1FD}'
const GermanyDE = '\u{1F1E9}\u{1F1EA}'
const CanadaCA = '\u{1F1E8}\u{1F1E6}'
const SlovakiaSK = '\u{1F1F8}\u{1F1F0}'
const SloveniaSI = '\u{1F1F8}\u{1F1EE}'
const PolandPL = '\u{1F1F5}\u{1F1F1}'
const UkraineUA = '\u{1F1FA}\u{1F1E6}'
const MaltaMT = '\u{1F1F2}\u{1F1F9}'
const IndiaIN = '\u{1F1EE}\u{1F1F3}'
const DenmarkDK = '\u{1F1E9}\u{1F1F0}'
const AustriaAT = '\u{1F1E6}\u{1F1F9}'
const UnitedKingdomUK = '\u{1F1EC}\u{1F1E7}'
const RomaniaRO = '\u{1F1F7}\u{1F1F4}'
const BulgariaBG = '\u{1F1E7}\u{1F1EC}'
const PortugalPT = '\u{1F1F5}\u{1F1F9}'
const JapanJP = '\u{1F1EF}\u{1F1F5}'
const LatviaLV = '\u{1F1F1}\u{1F1FB}'
const BelgiumBE = '\u{1F1E7}\u{1F1EA}'
const LithuaniaLT = '\u{1F1F1}\u{1F1F9}'
const EstoniaEE = '\u{1F1EA}\u{1F1EA}'
const FinlandFI = '\u{1F1EB}\u{1F1EE}'
const IsraelIL = '\u{1F1EE}\u{1F1F1}'
const SerbiaRS = '\u{1F1F7}\u{1F1F8}'
const GreeceGR = '\u{1F1EC}\u{1F1F7}'
const HongKongSARChinaHK = '\u{1F1ED}\u{1F1F0}'
