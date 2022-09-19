import '../Button/Button.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Button = (props) => {
  const { country, textarea, firstFlow, secondFlow, data, name } = props
  const getAllText = () => {
    let text =
      `
        Hey!${country}

`
      +
      textarea.map(
        (el) => `${el}
        
`) +
      +
      `${firstFlow}

` +
      data.map((el) => `${el.text}

` + `${el.url}

`) +
      `${secondFlow}

` +
      `Speak soon,${name}

`

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



