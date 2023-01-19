import React, { useEffect, useState } from 'react';
import { Box, display, height } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import AboutImgPath from '../../assets/ab.png';
import { useMediaQuery } from '@mui/material';
const About = () => {
	return (
		<Paper
			sx={{
				// minHeight: '80vh',
				// height: 'auto',
				// display: 'flex',
				// flexDirection: 'column',
				// justifyContent: 'center',
				paddingTop: '3rem',
				marginTop: '2rem',
				paddingBottom: '8rem',
			}}
		>
			<Typography variant="h3" sx={{ textAlign: 'center' }}>
				About Us
			</Typography>
			<Grid
				container
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					paddingBottom: '0.8rem',
					// backgroundColor: 'red',
					width: '100%',
				}}
				columnGap={2}
			>
				<Grid
					item
					sx={{
						width: '40%',
						margin: '0.7rem',
						height: '50%',
						justifyContent: 'center',
						alignItems: 'center',
						'@media(max-width: 780px)': {
							width: '70%',
						},
					}}
				>
					<Card>
						<CardMedia
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<img
								src={`${AboutImgPath}`}
								style={{ width: '70%', height: '70%' }}
								alt=""
							/>
						</CardMedia>
					</Card>
				</Grid>
				<Grid
					item
					sx={{
						width: '40%',
						margin: '0.7rem',
						height: '50%',
						justifyContent: 'center',
						alignItems: 'center',
						'@media(max-width: 780px)': {
							width: '70%',
						},
					}}
				>
					<Typography
						sx={{ textAlign: 'justify', opacity: 0.7 }}
						variant="body1"
					>
						Indian Society for Technical Education (ISTE) is a National level
						non-profit Society for the Technical Education System in our
						country. ISTE assists and contributes to the production and
						development of top quality professional technocrats. It has over
						1505 Student Chapters at the institutional level, one such chapter
						is ISTE SC MANIT. ISTE SC MANIT is one of the oldest student
						organizations in MANIT. Started in 2003, it has been actively
						contributing towards the professional and technical education of the
						students at MANIT and beyond. It has been conducting national level
						events like ChimeraX - The Multi-city Quizzing Competition, CODATHON
						- The Inter NIT Coding Contest, Anubhuti - The Talkshow, Megatreopuz
						- The Online Cryptic Hunt, Version β - The National level Hackathon.
						Events like these have gifted ISTE SC MANIT the Best Students'
						Chapter Award in the MP & Chhattisgarh region, not once but thrice.
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default About;
