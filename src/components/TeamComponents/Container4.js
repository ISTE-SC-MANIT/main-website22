import React, { useEffect, useState } from 'react';
import { Box, display, height } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia, CardActions } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import ImgPath from '../../assets/sponsors/conding-ninja-white.png';
import { hover } from '@testing-library/user-event/dist/hover';
import { Skeleton } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { Grow } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoIste from '../../assets/ISTElogo.png';
import { Tooltip } from '@mui/material';

const Container4 = (props) => {
	console.log(props.data);
	return (
		<Grid
			container
			rowSpacing={2}
			columnGap={2}
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				padding: '4rem',
			}}
		>
			{props.data.map((person, index) => (
				<Grid item key={index} spacing={2} gap={2}>
					<Card
						sx={{
							height: '400px',
							width: '390px',
							'@media(max-width:450px)': {
								width: '320px',
								height: '340px',
							},
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<CardMedia
								component={'img'}
								height="250px"
								image={person.imgsrc}
								sx={{
									borderRadius: '50%',
									width: '60%',
									'@media(max-width:450px)': {
										width: '53%',
										height: '185px',
									},
									objectFit: 'inherit',
								}}
							></CardMedia>
						</div>
						<CardActions
							sx={{ justifyContent: 'center', flexDirection: 'column' }}
						>
							<Typography>{person.name}</Typography>
							<Button sx={{ textAlign: 'center' }}>{person.vertical}</Button>
							<div>
								<Tooltip title="Linkedin" arrow>
									<Button>
										<a href="">
											<LinkedInIcon></LinkedInIcon>
										</a>
									</Button>
								</Tooltip>
								<Tooltip title="Instagram" arrow>
									<Button>
										<a href="">
											<InstagramIcon
												sx={{
													color: '#E1306C',
												}}
											></InstagramIcon>
										</a>
									</Button>
								</Tooltip>
								<Tooltip title="FaceBook" arrow>
									<Button>
										<a href="">
											<FacebookIcon></FacebookIcon>
										</a>
									</Button>
								</Tooltip>
								<Tooltip title="Twitter" arrow>
									<Button>
										<a href="">
											<TwitterIcon sx={{ color: '#1DA1F2' }}></TwitterIcon>
										</a>
									</Button>
								</Tooltip>
							</div>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default Container4;
