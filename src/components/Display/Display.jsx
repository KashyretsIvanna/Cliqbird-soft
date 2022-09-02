import '../Display/Display.scss'
import Input from '../Input/Input'
import Cover from '../CoverLetter/Cover'
const Display = () => {
  const options_hey = ['Us', 'Ca', 'Au', 'NL']
  const options_cases = [
    '1.Digital M.',
    '2.Ecommrse',
    '3.SasS(Jenna)',
    '4.SasS(Adapty)',
    '5.Web Design',
  ]
  const options_flow = [
    '1.Reserch',
    '2.Cold Calls',
    '3.Outreach',
    '4.Full Package',
  ]
  return (
    <div className="display">
      <div className="left">
        <Input
          icon={true}
          placeholder="Hey!"
          options={options_hey}
          type="input"
        />

        <Input placeholder="Paste the text" type="textarea" cross={true} />
        <Input
          icon={true}
          placeholder="Company cases"
          options={options_cases}
          type="input"
          cross={true}
        />
        <Input
          placeholder="Standard flow based on customer"
          options={options_flow}
          type="input"
        />
        <Input placeholder="Senders name" type="input" />
      </div>
      <Cover />
    </div>
  )
}

export default Display
