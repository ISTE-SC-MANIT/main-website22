import React, { useState } from 'react';

import style from './Event.module.css';
import EventImage from './EventImage';
import Button from '../UI/Button';
import { useAutocomplete } from '@mui/material';

import {motion} from "framer-motion";

const Event = (props) => {
	const [load, setLoad] = useState(false);

	return (
		<motion.div
			animate={{ scale: 1, opacity: 1 }}
			transition={{ type: "tween", duration: 1 }}
			initial={{ scale: 0, opacity: 0  }}  
		className={style.eventStyle}>
			<EventImage
				name={props.name}
				src={props.imageSrc}
				onClick={props.onClick}
			/>


			<div className={style.buttonContainer}>
				<a
					href={props.website}
					target="_blank"
					className={style.website}
				>
					Visit Website
				</a>
				<Button name={props.name} onClick={props.onClick}>
					Know More
				</Button>
			</div>
		</motion.div>
	);
};

export default Event;
