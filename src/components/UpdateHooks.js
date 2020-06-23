import React, {useState } from 'react'

const Update=()=> {
      const [name,setName]=useState('Pranil');
      const [age,setAge]=useState(20);



     const onInputChange=(e)=>{
          

           

                 setName(e.target.value)
          
      }

     function onAgeChange(e){
            
        setAge(e.target.value)
            
      }


            return (
                  <div>
                  <label>Name</label>
                  {name}
                  <br/>

                  <label>Age</label>
                  {age}
                  <br/>

                  <input type="text" value={name} onChange={onInputChange} />
                  <br/>
                  
                  <input type="text" value={age} onChange={onAgeChange}/>

                  </div>
            )
      }

export default Update;