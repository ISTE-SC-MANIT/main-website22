import React from 'react';

import style from './EventModal.module.css';
import Button from '../UI/Button';
import { Typography } from '@mui/material';
import { DateRange } from '@mui/icons-material';

const EventModal = (props) => {
	console.log(props.eventData);
	return (
		<>
			<div className={style.modalBackground} onClick={props.onCloseModal}></div>
			<div className={style.modalCard}>
				<h1 className={style.eventHeading}>{props.eventData.heading}</h1>
				<h2 className={style.title}>{props.eventData.title}</h2>
				<h4>{props.eventData.date}</h4>
				<Typography
					variant="body1"
					sx={{ padding: '2rem' }}
					textAlign="justify"
				>
					{props.eventData.description}
				</Typography>
				<a
					href={props.eventData.website}
					target="_blank"
					className={style.website}
				>
					Visit Website
				</a>
				<Button onClick={props.onCloseModal}>Close</Button>
			</div>
		</>
	);
};

export default EventModal;
