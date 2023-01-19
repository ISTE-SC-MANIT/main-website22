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
			<Button name={props.name} onClick={props.onClick}>
				Know More
			</Button>
		</div>
	);
};

export default Event;
