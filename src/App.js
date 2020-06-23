import React from 'react';
import './App.css';
import About from './components/About';
import user  from './data/user';


function App() {
  return (
    <div >
      <About user={user.user} instaLink={user.instaLink}/>
    </div>
  );
}

export default App;
