import '../Button/Button.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Button = (props) => {
  const { reference, country } = props
  const getAllText = () => {
    let text = `
    Hey!${country}${String.fromCodePoint(0x1f1e6, 0x1f1e8)}


   
   
   
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
