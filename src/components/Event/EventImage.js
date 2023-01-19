import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './EventImage.module.css';
import { Skeleton } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
const EventImage = (props) => {
	const [load, setLoad] = useState(false);
	useEffect(() => {
		if (window.scrollY >= 800) {
			setTimeout(() => {
				setLoad(true);
			}, 3000);
		}
	});
	return (
		<div name={props.name} className={style.eventImage} onClick={props.onClick}>
			{load ? (
				<Fade triggerOnce direction="down">
					<img src={props.src} name={props.name} />
				</Fade>
			) : (
				<Skeleton
					variant="rectangular"
					width={'100%'}
					height={'250px'}
					animation="wave"
				></Skeleton>
			)}
		</div>
	);
};

export default EventImage;
