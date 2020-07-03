import React from 'react';
import './App.css';
import NavBar from './components/NavigationBar'
import Carousel from './components/Carousel';
import Boxes from './components/Boxes';
import Appointment from './components/AppoiCalendar'
import Handlers from './components/Handlers';
import Footer from './components/Footer'


function App() {
  return (
    <div >
      <NavBar/>
      <Carousel/>
      <Boxes/>
     <Appointment/>
      
      <Handlers/>
      <Footer/>
    </div>
  );
}

export default App;
