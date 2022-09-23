import '../Button/Button.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Button = (props) => {
  const { country, textarea, firstFlow, secondFlow, changeData, name } = props
  let flow1 = firstFlow !== "" ? `${firstFlow}
  
  

`: ""
  let flow2 = secondFlow !== "" ? `${secondFlow}
  
`: ""

  const cases = `${changeData.map((el) => `${el.text}

` + `${el.url}
`).join('')
    }`

  const textareaString = textarea.map(
    (el) => el !== "" ? `${el} 

`: "").join("")



  const getAllText = () => {
    let text =
      `Hey!${country}

`+ textareaString
      + flow1 +
      cases
      + flow2 +
      `Speak soon,
`+ `${name}`

    return text
  }

  return (
    <CopyToClipboard text={getAllText()}>
      <div className="button-cont">
        <div className="button-t">COPY TEXT</div>
      </div>
    </CopyToClipboard>
  )
}

export default Button
