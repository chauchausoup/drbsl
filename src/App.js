import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavigationBar'
import Carousel from './components/Carousel/Carousel';
import Boxes from './components/Hospitals/Boxes';
import Appointment from './components/Appointment/AppoiCalendar'
import Handlers from './components/Handlers/Handlers';
import Footer from './components/Footer/Footer'


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
