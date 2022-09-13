import '../Button/Button.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Button = (props) => {
  const { country, textarea, firstFlow, secondFlow, data, name } = props
  const getAllText = () => {
    var emoji = String.fromCodePoint(0x1f621)
    let text =
      `
    Hey!
    ` +
      textarea.map(
        (el) => `
        ${el}`,
      ) +
      `

    ${firstFlow}` +
      data.map(
        (el) =>
          `

    ${el.url}` +
          `
    ${el.text}`,
      ) +
      `
    
    ${secondFlow}` +
      `
      
    Speak soon,
    ${name}
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
