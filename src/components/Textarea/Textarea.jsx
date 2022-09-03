const Textarea = (props) => {
  const { textarea, setTextarea, index } = props
  const textHandler = (e) => {
    setTextarea((state) => [
      ...state.slice(0, index),
      e.target.value,
      ...state.slice(index + 1, state.length),
    ])
    console.log(index)
  }

  return (
    <div className="text_container">
      <textarea
        type="text"
        value={textarea[index]}
        onChange={(e) => textHandler(e)}
        placeholder="Paste the text"
        className="select_textarea"
      />
      {index === 0 && (
        <button
          onClick={() => {
            setTextarea((state) => [...state, ''])
          }}
          className="cross"
        ></button>
      )}
    </div>
  )
}

export default Textarea
