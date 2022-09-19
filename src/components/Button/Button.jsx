import '../Button/Button.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Button = (props) => {
  const { country, textarea, firstFlow, secondFlow, data, name } = props
  let flow1 = firstFlow !== "" ? `${firstFlow}

`: ""
  let flow2 = secondFlow !== "" ? `${secondFlow}
  
`: ""

  const getAllText = () => {
    let text =
      `Hey!${country}

`+ textarea.map(
        (el) =>el!==""? `${el} 

`:"")
      + flow1 +
      data.map((el) => `${el.text}

` + `${el.url}

`)
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
