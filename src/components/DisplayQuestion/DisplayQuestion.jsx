import React from 'react'
import './DisplayQuestion.scss'
import logoSearch from './logo-search.svg'

export default function DisplayQuestion() {
     const array = ['Describe your recent experience with similar projects?', 'We provide outbound services and handle all sales cycles untithe prospect would like to arrange a call with you.', 'Banal customer questions', 'CLIQBIRD SCRIPT']

  return (
    <div className='DisplayQuestion'>

    <div className='left-side-container'>  

         {/* input + list  */}
         <div className='question-search'>
            <input type="text" placeholder='Banal customer questions' />
            <button><img src={logoSearch} alt="" /></button>
         </div>

         <div className='question-list'>
            <ul>
                {array.map(e=>{return <li>{e}</li>})}
            </ul>
         </div>
         
    </div>

    <div className='right-side-container'>
            {/* window + button */}    


            <div className='question-window'>We provide outbound services and handle all sales cycles until the prospect would like to arrange a call with you.</div>

            <div className='button-container'><div className='button-text'>COPY TEXT</div></div>


    </div>
          

    </div>
  )
}
