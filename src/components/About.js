import React from 'react'
import '../App.css'

export default function About(props) {
      
    

      return (
            <div className="container">
            <div className="img-container">
                  <img src={props.user.avatar} alt={"hey a ima"} />
                  <br/> 
            </div>


            <br/>

           <div className="body-container">
                 <a href={`${props.instaLink}${props.user.instaUsername}`} target='_blank' rel="noopener noreferrer" className="link">{props.user.name}</a>

                  <label>Location  </label>
                  {props.user.location}
                  <br/>
                  <label>Eats  </label>
                 
                  {props.user.foodType}
                  <br/>
                  <label>Age  </label>
                 
                  {props.user.age}
                  <br/>
                  <label>Likes  </label>
                 
                  {props.user.likes}
                  <br/>
                 
                  <label>Insta Handler  </label>
                 
                  @{props.user.instaUsername}
                  <br/>
                 
           </div>


            </div>
      )
}
