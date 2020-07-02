import React from 'react';
import '/home/krishnadhakal/Desktop/drbsl/src/styles/Handlers.scss'

function AppoiCalendar(){
return(
          <div className="handlers">
                    
                              <div id="facebook">

                              <div class="fb-page" data-href="https://www.facebook.com/storiesafter12" data-tabs="timeline" data-width="300" data-height="400" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/storiesafter12" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/storiesafter12">Stories After 12</a></blockquote></div>
                              </div>

                              <div id="news">
                              
                                        <News/>
                              
                              </div>

                    
          </div>
)
}
const newsDate=[
                    {
                              title:"Paracetamol to the rescue",
                              content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                              date:"2020-02-22"
                    },
                    {
                              title:"Covid Mania",
                              content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                              date:"1990-03-22"
                              
                    }
          ]
          
function News(){
          return(
                    newsDate.map((newz,index)=>{
                              return(
                              <div id="newz" key={index}>
                                        <label id="news-title">{newz.title}</label><br/>
                                        <label id="news-content">{newz.content}</label><br/>
                                        <label id="news-date">{newz.date}</label>
                              </div>
                              )
                    })
                   
          )
}

export default AppoiCalendar;
