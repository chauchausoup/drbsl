import React,{useState} from 'react';
import '../styles/Navbar.scss';

export default function NavigationBar(){

          const[isOpen,setIsOpen]=useState(false);

          function handleClick(){
                    setIsOpen(!isOpen)
          }

          return(
                    <div>
                              <nav className="Nav">
                                        <div className="head">
                                                  <h1 id="headline">drbuddhisagarlamichhane.com</h1>
                                                  <div id="btn" onClick={handleClick}>
                                                            -
                                                  </div>
                                        </div>
                                        <div className= {isOpen?"drop":"ceil"}> 
                                                  <ul id="socials1">
                                                            <li><a href="/#">Email</a></li>
                                                            <li><a href="/#">Facebook</a></li>
                                                            <li><a href="/#">Viber</a></li>
                                                  
                                                  
                                                  </ul>
                                                  <ul id="routes">
                                                            <li onClick={handleClick}>News</li>
                                                            <li onClick={handleClick}>Login</li>
                                                  </ul>
                                                  <ul id="socials2">
                                                            <li><a href="/#">Email</a></li>
                                                            <li><a href="/#">Facebook</a></li>
                                                            <li><a href="/#">Viber</a></li>
                                                  
                                                  
                                                  </ul>
                                        </div>
                                        
                              </nav>
                    </div>
          )
}

