import React from 'react';
import '../styles/Handlers.scss'
import {Link} from 'react-router-dom';
import newsDate from '../data/news';


function AppoiCalendar(){
return(
          <div className="handlers">
                    
                              <div id="facebook">

                              <div className="fb-page" data-href="https://www.facebook.com/storiesafter12" data-tabs="timeline" data-width="300" data-height="400" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/storiesafter12" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/storiesafter12">Stories After 12</a></blockquote></div>
                              </div>

                              <div id="news">
                              
                                        <News/>
                              <Link to ="/news" id="seeMore">See More</Link>
                              </div>


                    
          </div>
)
}
          
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
