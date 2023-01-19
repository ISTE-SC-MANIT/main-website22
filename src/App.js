import React, { useState } from 'react';

import Navbar from './components/UI/Navbar';
import Sponsors from './components/UI/Sponsors';
import About from './components/About/About';
import style from './App.module.css';
import EventsContainer from './components/Event/EventsContainer';
import Header from './components/Header';
import BreakLine from './components/UI/BreakLine';
import Footer from './components/Footer/Footer';
import { Stack, Box } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
function App() {
	return (
		<>
			<Navbar />
			<Header></Header>
			{/* <Slide triggerOnce direction="right"> */}
			<About></About>
			{/* </Slide> */}
			{/* <Slide triggerOnce direction="up"> */}
			<EventsContainer />
			{/* </Slide> */}

			<BreakLine />
			<Slide triggerOnce>
				<Sponsors>{/* */}</Sponsors>
			</Slide>
			<Slide triggerOnce direction="left">
				<Footer></Footer>
			</Slide>
		</>
	);
}

export default App;
