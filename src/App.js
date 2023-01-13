import React, {useState} from "react";

import Navbar from "./components/UI/Navbar";

import style from './App.module.css';
import EventsContainer from "./components/Event/EventsContainer";
import Header from "./components/Header";
import BreakLine from "./components/UI/BreakLine"
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      {/* <EventsContainer/> */}
    </>
  );
}

export default App;
