import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"

const CaseInput = ({ handleChangeText, handleChangeUrl, el, changeData }) => {

    const [text, setText] = useState(el.text)
    const [url, setUrl] = useState(el.url)
    
    return (
        <div >
            <input value={text} onChange={(e) => {
                handleChangeText(e.target.value, el.name, el.url, el.text, el.id)
                setText(e.target.value)

            }} ></input>
            <br />
            <input value={url} onChange={(e) => {
                handleChangeUrl(e.target.value, el.name, el.url, el.text, el.id)
                setUrl(e.target.value)
            }} className="url"></input>
            <br />
            <br />
        </div>
    )
}

export default CaseInput