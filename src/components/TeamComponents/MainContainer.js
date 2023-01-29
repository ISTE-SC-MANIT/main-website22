import React, { useEffect, useState } from 'react';
import { cardActionAreaClasses, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia, CardActions } from '@mui/material';

import { Skeleton } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Tooltip } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	card: {
		background: '#242830',
	},
});
const Container4 = (props) => {
	// console.log(props.data);
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 5000);
	});
	return (
		<>
			<Typography variant="h4" textAlign={'center'}>
				{props.year} Year
			</Typography>
			<Grid
				container
				rowSpacing={2}
				columnSpacing={2}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					padding: '4rem',
				}}
			>
				{props.data.map((person, index) => (
					<Fade
						triggerOnce
						direction="up"
						damping={0.7}
						style={{ margin: '1rem', marginLeft: '1.87rem' }}
					>
						<Grid item key={index} spacing={2} gap={2} className={classes.card}>
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
								{loading ? (
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
										}}
									>
										<CardMedia
											component={'img'}
											height="250px"
											image={`${person.imgsrc}`}
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
								) : (
									<Skeleton
										variant="rectangular"
										width={'100%'}
										height={'100%'}
										animation="wave"
									></Skeleton>
								)}

								<CardActions
									sx={{ justifyContent: 'center', flexDirection: 'column' }}
								>
									<Typography>{person.name}</Typography>
									<Button sx={{ textAlign: 'center' }}>
										{person.vertical}
									</Button>
									<div>
										<Tooltip title="Linkedin" arrow>
											<Button>
												<a target={'__blank'} href={person.linkedinProfile}>
													<LinkedInIcon></LinkedInIcon>
												</a>
											</Button>
										</Tooltip>
										<Tooltip title="Instagram" arrow>
											<Button>
												<a target={'__blank'} href={person.instagramProfile}>
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
												<a target={'__blank'} href={person.facebookProfile}>
													<FacebookIcon></FacebookIcon>
												</a>
											</Button>
										</Tooltip>

										{person.vertical.includes('Web') === true ||
										person.vertical.includes('Technical') === true ? (
											<Tooltip title="Github" arrow>
												<Button>
													<a target={'__blank'} href={person.githubProfile}>
														<GitHubIcon sx={{ color: 'black' }}></GitHubIcon>
													</a>
												</Button>
											</Tooltip>
										) : (
											<Tooltip title="Twitter" arrow>
												<Button>
													<a href={person.twitterProfile} target={'__blank'}>
														<TwitterIcon
															sx={{ color: '#1DA1F2' }}
														></TwitterIcon>
													</a>
												</Button>
											</Tooltip>
										)}
									</div>
								</CardActions>
							</Card>
						</Grid>
					</Fade>
				))}
			</Grid>
		</>
	);
};

export default Container4;
