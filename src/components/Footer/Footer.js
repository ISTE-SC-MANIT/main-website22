import React, { useEffect, useState } from 'react';
import { Box, display, height } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import ImgPath from '../../assets/sponsors/conding-ninja-white.png';
import { hover } from '@testing-library/user-event/dist/hover';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoIste from '../../assets/ISTElogo.png';
const Footer = () => {
	return (
		<Paper sx={{ backgroundColor: '#2d3843' }}>
			<Typography variant="h5" sx={{ textAlign: 'center' }}></Typography>
			<Grid
				container
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					paddingBottom: '0.8rem',
					// backgroundColor: 'red',
					width: '100%',
				}}
				columnGap={15}
				// fullWidth
				// spacing={18}
			>
				<Grid
					item
					sx={{
						width: '200px',
						margin: '0.7rem',
						height: '140px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={`	${logoIste}
`}
						alt=""
						style={{ width: '100%', marginTop: '3rem' }}
					/>
				</Grid>
				<Grid
					item
					sx={{
						width: '200px',
						margin: '0.7rem',
						height: '140px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Button sx={{ color: 'white' }}>
							<HomeIcon></HomeIcon>{' '}
							<Typography sx={{ color: 'white' }}>Address</Typography>
						</Button>
						<a
							href="https://goo.gl/maps/nTNnuX6w5YbGKTic7"
							style={{
								textDecoration: 'none',
								color: 'whitesmoke',
								opacity: '0.7',
							}}
							target="__blank"
						>
							<Typography textAlign={'center'}>
								Maulana Azad National Institute of Technology, Bhopal
							</Typography>
						</a>
					</div>
				</Grid>
				<Grid
					item
					sx={{
						width: '200px',
						margin: '0.7rem',
						height: '140px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Button sx={{ color: 'white' }}>
							<ContactsIcon></ContactsIcon> <Typography>Contact</Typography>
						</Button>
						<a
							href="tel:// 8504036415"
							style={{
								textDecoration: 'none',
								color: 'whitesmoke',
								opacity: '0.7',
							}}
						>
							<Typography>
								Animesh Nayak{' '}
								<Typography textAlign={'center'}>+91 8504036415</Typography>
							</Typography>
						</a>
						<a
							href="tel:// 9490165056"
							style={{
								textDecoration: 'none',
								color: 'whitesmoke',
								opacity: '0.7',
							}}
						>
							<Typography>
								Navyasree Konagalla
								<Typography textAlign={'center'}>+91 9490165056</Typography>
							</Typography>
						</a>
					</div>
				</Grid>
				<Grid
					item
					sx={{
						width: '200px',
						margin: '0.7rem',
						height: '140px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Button sx={{ color: 'white' }}>
							<EmailIcon></EmailIcon> <Typography>Email Address</Typography>
						</Button>

						<a
							href="mailto:istescmanit@gmail.com"
							style={{
								textDecoration: 'none',
								color: 'whitesmoke',
								opacity: '0.7',
							}}
						>
							<Typography>istescmanit@gmail.com</Typography>
						</a>
						<Stack
							sx={{ marginTop: '1.5rem', width: '260px' }}
							spacing={2}
							direction="row"
						>
							<TextField
								sx={{ color: 'white', outline: 'white' }}
								label="Message"
								size="small"
								color="warning"
							></TextField>
							<Button variant="contained">Send</Button>
						</Stack>
					</div>
				</Grid>
			</Grid>
			<Paper sx={{ paddingBottom: '2rem', backgroundColor: '#2d3843' }}>
				<Grid>
					<Typography sx={{ textAlign: 'center' }}>
						<Button sx={{ color: 'white', outline: 'white' }}>
							<LinkIcon></LinkIcon> <Typography>Social Links</Typography>
						</Button>
						<div>
							<Button title="linkedin">
								<LinkedInIcon></LinkedInIcon>
							</Button>
							<Button title="instagram">
								<InstagramIcon
									sx={{
										color: '#E1306C',
									}}
								></InstagramIcon>
							</Button>
							<Button title="facebook">
								<FacebookIcon></FacebookIcon>
							</Button>
							<Button title="twitter">
								<TwitterIcon sx={{ color: '#1DA1F2' }}></TwitterIcon>
							</Button>
						</div>
					</Typography>
				</Grid>
			</Paper>
			<Typography variant="body1" textAlign={'center'} sx={{ color: 'white' }}>
				Copyright © 2022 by ISTE-SC MANIT. All rights reserved.
			</Typography>
		</Paper>
	);
};

export default Footer;