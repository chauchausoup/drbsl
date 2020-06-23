import React from 'react'
import { Component } from 'react';

export default class User extends Component{
      

      render(){

     

      var da= this.props.userData;


                  return (
                        <ul className="box">
                        
                              <li>{da.name}</li>
                              <li>{da.location}</li>
                              <li>{da.tel}</li>

                        </ul>

            )
     

           
            
      }
}
