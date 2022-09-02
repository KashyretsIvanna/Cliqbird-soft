import '../Display/Display.scss'
import Input from '../Input/Input'
import Cover from '../CoverLetter/Cover'
const Display = () => {
  return (
    <div className="display">
      <div className='left'>
        <Input type="text" />
        <Input />
        <Input />
        <Input />
      </div>
      <Cover/>
      
    </div>
  )
}

export default Display
