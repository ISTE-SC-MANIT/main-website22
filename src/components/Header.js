import React from 'react';
import { Button } from '@mui/material';
// import './App.css';
import './Home.css';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';
import {motion} from "framer-motion";
import classes from './Header.module.css';

import BreakLine from '../components/UI/BreakLine'

import Socials from './Socials';

export const App = () => {
	return (
		<motion.div 
			animate={{ opacity: 1}}  transition={{type:"tweek", duration: 0.6}} initial={{ opacity: 0}}
			className={classes.headDiv}>	
			<div>

				<motion.h1
					animate={{ opacity: 1, scale: 1, translateY:'0'}} transition={{ type: "tweek", duration: 1.5 }} initial={{ opacity: 0, scale: 0 , translateY:'-100%'}}
				> ISTE SC MANIT</motion.h1>
				<BreakLine/>
				<motion.h3
					animate={{ opacity: 1, scale: 1, translateY: '0' }} transition={{ type: "tweek", duration: 1.5 }} initial={{ opacity: 0, scale: 0, translateY: '100%' }}
				>Best Students' Chapter in Madhya Pradesh-Chhattisgarh Region from 3 consecutive years.</motion.h3>
			</div>

			<Socials/>
		</motion.div>
	);
};
export default App;
