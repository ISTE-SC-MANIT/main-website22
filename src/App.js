import React, { useState } from 'react';

import Navbar from './components/UI/Navbar';
import Sponsors from './components/UI/Sponsors';
import style from './App.module.css';
import { Stack, Box } from '@mui/material';

function App() {
	return (
		<>
			<Navbar />
			<Sponsors></Sponsors>
		</>
	);
}

export default App;
