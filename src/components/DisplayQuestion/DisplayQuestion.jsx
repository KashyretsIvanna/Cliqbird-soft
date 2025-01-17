import React from 'react'
import './DisplayQuestion.scss'
import logoSearch from './logo-search.svg'
import { useState, useEffect } from 'react'

export default function DisplayQuestion() {
  const [data, setData] = useState([])
  const [ques, setQues] = useState('')
  const [filterData, setFilterData] = useState([{}])
  const [isWright, setIsWright] = useState(false)
  const [choice, setChoice] = useState('')
  

  useEffect(() => {
    fetch('../../../question.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  useEffect(() => {
    const array = data.filter((e) => {
      return (e.question.toLowerCase()).includes(ques.toLowerCase())
    })
    setFilterData(array)
  }, [ques,data])

  useEffect(() => {
    if (filterData.length > 0) {
      setIsWright(true)
    }

    if (ques === '') {
      setIsWright(false)
    }
  },[filterData,ques])

  const searchButton = () => {
    setFilterData(data)
  }

  return (
    <div className="DisplayQuestion">
      <div className="left-side-container">
        {/* input + list  */}
        <div className="question-search">
          <input
            type="text"
            placeholder="Banal customer questions"
            onChange={(event) => setQues(event.target.value)}
          />
          <button onClick={searchButton}>
            <img src={logoSearch} alt="" />
          </button>
        </div>

        {isWright === true ? (
          <div className="question-list">
            <ul>
              {filterData.map((e) => {
                return (
                  <li
                  key={e.answer}
                    onClick={() => {
                      setChoice(e.answer)
                    }}
                  >
                    {e.question}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="right-side-container">
        {/* window + button */}
        <div className="question-window">{choice}</div>
        <div
          className="button-container"
          onClick={(event) => {
            navigator.clipboard.writeText(choice)
          }}
        >
          <div className="button-text">COPY TEXT</div>  
        </div>
      </div>
    </div>
  )
}


