import React from 'react'
import "./Header.scss"

export default function Header(props) {
  const {witchDispay,setWitchDisplay} = props
  return (
    <header>
      <div className='header-container'>
      <div className="switch">
        <p>C</p>
        <input type={'checkbox'} onChange={()=>{witchDispay==='cover'? setWitchDisplay('question'):setWitchDisplay('cover')}} />
        <p>Q</p>
        </div>
        <h1><span>CLIQBIRD</span> SCRIPT</h1>
        </div>
    </header>
  )
}
                                              