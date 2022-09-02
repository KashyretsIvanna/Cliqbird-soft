import '../Input/Input.scss'

const Input = (props) => {
  const { placeholder ,type,selections} = props
  return <input type="text" className="input" placeholder={placeholder} />
}

export default Input
