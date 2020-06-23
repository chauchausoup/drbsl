import React, { Component } from 'react'

export default class Update extends Component {
      constructor(props){
            super(props);
            this.state={
                  name:'mike',
                  age:20
            }
            this.onInputChange=this.onInputChange.bind(this);
            this.onAgeChange=this.onAgeChange.bind(this);
      }

      onInputChange(e){
          

            this.setState({

                  name:e.target.value,
            })
      }

      onAgeChange(e){
            
            this.setState({
                  age:e.target.value,
            })
      }

      render() {

           
            
            return (
                  <div>
                  <label>Name</label>
                  {this.state.name}
                  <br/>

                  <label>Age</label>
                  {this.state.age}
                  <br/>

                  <input type="text" value={this.state.name} onChange={this.onInputChange} />
                  <br/>
                  
                  <input type="text" value={this.state.age} onChange={this.onAgeChange}/>

                  </div>
            )
      }
}
