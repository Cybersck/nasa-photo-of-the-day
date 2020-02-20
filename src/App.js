import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import DateSelector from "./components/Date/DateSelector";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <DateSelector/>
      <div className="sub"></div>
      <Footer/>
    </div>
  );
}

export default App;
 