import React from 'react';
import './App.css';
import NavBar from './components/NavigationBar'
import Footer from './components/Footer'
import Middle from './components/Middle'


function App() {
  return (
    <div >
      <NavBar/>
      <Middle/>
      <Footer/>
    </div>
  );
}

export default App;
