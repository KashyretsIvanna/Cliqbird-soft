import '../CoverLetter/Cover.scss'
import { nanoid } from 'nanoid'

const Cover = (props) => {
  const { country, textarea, copyText } = props
  return (
    <div className="cover" ref={copyText}>
      <div className="hey">Hey!{country}</div>
      <div className="intro">
        We would love to get experience with a project like yours! We recently
        had a work call with a similar project to yours, but unfortunately it
        didn't work out due to personal reasons of the client. We are dealing
        with the presale process and will be able to find clients to sell your
        NFT through various resources such as email outreach, cold calls
        outreach, LinkedIn outreach. There will also be a research team who will
        find potential clients for us. What do you think about it?
      </div>
      {textarea.map((el) => (
        <div key={nanoid()} className="textarea">
          {el}
        </div>
      ))}
    </div>
  )
}

export default Cover
