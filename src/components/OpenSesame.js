import React, { useState } from 'react'

const OpenSesame =()=>{

      const secretKey = "mama"

      const [input,setInput] = useState('')

      const onTextChange=(e)=>{
            setInput(e.target.value)
            
      }

      const onSubmission=()=>{
            if(input===secretKey){
                  alert(`hurray ${secretKey}`)
            }
      }
      
      return(
            <React.Fragment>
            <h2>
                  Type the secret key!
            </h2>

            <form onSubmit={onSubmission}>
                  <input 
                  type="text" 
                  value={input}
                  onChange={onTextChange}
                  
                  />

                  <input
                  type="submit" 
                  value="Submit"/>
            </form>

            <p>
                  Hint: mummy
            </p>
            </React.Fragment>

      )

}

export default OpenSesame;