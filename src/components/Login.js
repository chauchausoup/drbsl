import React from 'react';
import {Link} from 'react-router-dom';


function Login(){
return(
          <div className="login">
                  <h3>
                        Welcome to the Logination page.
                  </h3>
                  <p>
                        hello user
                  </p>
                  <form>
                        <input type="text" name="email" id="login_email"/>
                        <input type="password" name="password" id="login_password"/>
                        <button type="submit"><Link to ="/admin">Login</Link></button>
                  </form>

          </div>
)
}

export default Login;
