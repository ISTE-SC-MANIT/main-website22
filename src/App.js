import React, { useState } from 'react';

import Navbar from './components/UI/Navbar';
import Sponsors from './components/UI/Sponsors';
import style from './App.module.css';
import EventsContainer from './components/Event/EventsContainer';
import Header from './components/Header';
import BreakLine from './components/UI/BreakLine';
import Footer from './components/Footer/Footer';
import { Stack, Box } from '@mui/material';

function App() {
	return (
		<>
			<Navbar />
			<Header></Header>
			<EventsContainer />
			<BreakLine />
			<Sponsors></Sponsors>
			<Footer></Footer>
		</>
	);
}

export default App;
