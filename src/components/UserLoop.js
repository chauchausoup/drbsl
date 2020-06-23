
import data from '../data/data';
import User from '../components/User';
import React, { Component } from 'react'

import '../App.css'

export default class UserLoop extends Component {
      render() {
            return (
                  <div >
                        {data.map((d,i)=>(
                                    <User key={i} userData={d}/>
                        ))}
                        
                  </div>
            )
      }
}
