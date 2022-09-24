import { useState } from "react"

const CaseInput = ({ handleChangeText, handleChangeUrl, el, changeData }) => {

    const [text, setText] = useState(el.text)
    const [url, setUrl] = useState(el.url)
    
    return (
        <div >
            <div contentEditable="true" onChange={(e) => {
                handleChangeText(e.target.value, el.name, el.url, el.text, el.id)
                setText(e.target.value)

            }} >{text}</div>
            <br />
            <div contentEditable="true" onChange={(e) => {
                handleChangeUrl(e.target.value, el.name, el.url, el.text, el.id)
                setUrl(e.target.value)
            }} className="url">{url}</div>
            <br />
            <br />
        </div>
    )
}

export default CaseInput