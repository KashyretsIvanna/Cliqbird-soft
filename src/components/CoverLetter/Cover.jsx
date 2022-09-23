import '../CoverLetter/Cover.scss'
import { nanoid } from 'nanoid'
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { useEffect } from 'react';
import { useState } from 'react';
import CaseInput from "../CaseInput/CaseInput"
polyfillCountryFlagEmojis();

const Cover = (props) => {




  const { country, textarea, data, firstFlow, secondFlow, name, ChangeFirst, ChangeSecond, setChangeFirst, setChangeSecond, changeData, setChangeData } = props;
  useEffect(() => {
    setChangeFirst(firstFlow)
    setChangeSecond(secondFlow)
  }, [firstFlow, secondFlow])
  useEffect(() => {
    setChangeData(data)

  }, [data])

  const handleChangeText = (value, name, url, text, id) => {
    let filter = changeData.filter(el => el.id === id)[0]
    let index = changeData.indexOf(filter)

    setChangeData(el => [
      ...data.slice(0, index),
      { name: name, url: url, text: value, id: id },
      ...data.slice(index + 1, el.length),
    ])

  }
  const handleChangeUrl = (value, name, url, text, id) => {
    const index = changeData.indexOf(el => el.name === name)
    setChangeData(el => [
      ...el.slice(0, index + 1),
      { name: name, url: value, text: text, id: id },
      ...el.slice(index + 2, el.length),
    ])

  }

  return (
    <div className="cover">
      <div className="hey">Hey!{country}</div>
      <br />
      {textarea.map((el) => (
        <div key={nanoid()} className="textarea">
          {el}
          {el !== "" && <><br /><br /></>}
        </div>
      ))}
      <div contentEditable="true" className="textar" onChange={(e) => { setChangeFirst(e.target.value) }}>{ChangeFirst}</div>
      {firstFlow && <><br /><br /></>}
      {changeData.map((el) => (
        <CaseInput changeData={changeData} key={nanoid()} handleChangeText={handleChangeText} handleChangeUrl={handleChangeUrl} el={el} />


      ))}
      
      <div contentEditable="true" className="textar" onChange={(e) => { setChangeSecond(e.target.value) }}>{ChangeSecond}</div>
      {secondFlow && <br />}
      <p>See soon,</p>
      <p>{name}</p>
    </div>
  )
}

export default Cover
