import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavigationBar'
import Carousel from './components/Carousel/Carousel';
import Boxes from './components/Hospitals/Boxes';


function App() {
  return (
    <div >
      <NavBar/>
      <Carousel/>
      <Boxes/>
    </div>
  );
}

export default App;
