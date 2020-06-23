
import data from '../data/data';
import User from '../components/User';
import React, { Component } from 'react'

import '../App.css'

export default class UserLoop extends Component {
      render() {
            return (
                  <ul >
                        {data.map(d=>(
                                    <User key={d.name} userData={d}/>
                        ))}
                        
                  </ul>
            )
      }
}
