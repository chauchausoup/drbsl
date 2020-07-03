import React from 'react';
import '../styles/Boxes.scss'

function Boxes(){
return(
         <div className="hospitals">
                    <h1 id="head">
                    Hospitals that I have served:
                    </h1>
                    <div className="boxes">
                   
                              <Box/>
                    </div>
         </div>
)
}

const hospitalData=[{
                              name:"Gandaki",
                              location:"Hospital Chowk",
                              speciality:"General Physician",
                              from:"2016",
                              to:"Now"
                    },
                    {
                              name:"Sisuwa",
                              location:"Milan Chowk",
                              speciality:"General Physician",
                              from:"2012",
                              to:"2015"
                    }
                    ]
function Box(){
          return(
                    hospitalData.map((data,index)=>{
                              return(
                              <div className="box" key={index}>
                                        Name : <label id="name">{data.name}</label><br/>
                                        Location : <label id="location">{data.location}</label><br/>
                                        Speciality : <label id="speciality">{data.speciality}</label><br/>
                                        From : <label id ="from">{data.from}</label><br/>
                                        To : <label id="to">{data.to}</label><br/>
                              </div>
                              )
                    })
                   
          )
}

export default Boxes;

