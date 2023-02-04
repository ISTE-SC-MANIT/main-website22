import React from 'react';

import style from './EventModal.module.css';
// import Button from '../UI/Button';
import { Typography } from '@mui/material';
import { DateRange } from '@mui/icons-material';
import { Button } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({});
const EventModal = (props) => {
	console.log(props.eventData);
	const classes = useStyles();
	return (
		<>
			<div className={style.modalBackground} onClick={props.onCloseModal}></div>
			<div className={style.modalCard}>
				<h1 className={style.eventHeading}>{props.eventData.heading}</h1>
				<h2 className={style.title}>{props.eventData.title}</h2>
				<h4>{props.eventData.date}</h4>
				<p className={style.description}>{props.eventData.description}</p>

				<div className={style.buttonContainer}>
					<Button
						target={'__blank'}
						href={props.eventData.buttonContainer}
						className={classes.button}
						variant="contained"
						sx={{ color: 'white' }}
						size="small"
					>
						Visit Website
					</Button>

					<div className={style.buttonContainer}>
						<Button onClick={props.onCloseModal}>Close</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventModal;
