import React, { useState } from 'react';

import style from './Event.module.css';
import EventImage from './EventImage';
import Button from '../UI/Button';
import { useAutocomplete } from '@mui/material';

const Event = (props) => {
	const [load, setLoad] = useState(false);
	return (
		<div className={style.eventStyle}>
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
		</div>
	);
};

export default Event;
