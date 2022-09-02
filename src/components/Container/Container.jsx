import "../Container/Container.scss"
import { useState } from "react"
import Header from "../Header/Header"
import Display from "../Display/Display"
import DisplayQuestion from "../DisplayQuestion/DisplayQuestion"

const Container=()=>{
    const [witchDispay,setWitchDisplay] = useState('cover')
    return(
        <div className="container">
         <Header witchDispay={witchDispay} setWitchDisplay={setWitchDisplay} />
         {witchDispay === 'cover'?
           <Display />
           :
           <DisplayQuestion />
        }
        </div>

    )
}

export default Container