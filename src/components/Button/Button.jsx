import '../Button/Button.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Button = (props) => {
  const { reference, country } = props
  const getAllText = () => {
    let text = `Hey!${country} We would love to get experience with a project like yours! We recently
    had a work call with a similar project to yours, but unfortunately it
    didn't work out due to personal reasons of the client. We are dealing
    with the presale process and will be able to find clients to sell your
    NFT through various resources such as email outreach, cold calls
    outreach, LinkedIn outreach. There will also be a research team who will
    find potential clients for us. What do you think about it?`
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
