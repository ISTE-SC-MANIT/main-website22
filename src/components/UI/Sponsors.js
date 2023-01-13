import React, { useEffect, useState } from 'react';
import { Box, display, height } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import ImgPath from '../../assets/sponsors/conding-ninja-white.png';
// import data from '../../assets/sponsors/tp';

const Sponsors = () => {
	const data = [
		{
			id: 0,
			image: '../../assets/sponsors/theSandwich-white.png',
		},
	];
	console.log(data);
	return (
		<Paper sx={{ marginTop: '2rem' }}>
			<Typography variant="h3" sx={{ textAlign: 'center' }}>
				Our Sponsors
			</Typography>

			<Grid
				container
				spacing={3}
				sx={{ alignItems: 'center', justifyContent: 'center' }}
			>
				<Grid item>
					<div
						style={{
							backgroundColor: 'red',
							textAlign: 'center',
							height: '200px',
							width: '200px',
						}}
					>
						Item 1
					</div>
				</Grid>
				<Grid item>
					<div
						style={{
							backgroundColor: 'red',
							textAlign: 'center',
							height: '200px',
							width: '200px',
						}}
					>
						Item 1
					</div>
				</Grid>
				<Grid item>
					<div
						style={{
							backgroundColor: 'red',
							textAlign: 'center',
							height: '200px',
							width: '200px',
						}}
					>
						Item 1
					</div>
				</Grid>
				<Grid item>
					<div
						style={{
							backgroundColor: 'red',
							textAlign: 'center',
							height: '200px',
							width: '200px',
						}}
					>
						Item 1
					</div>
				</Grid>
				<Grid item>
					<div
						style={{
							backgroundColor: 'red',
							textAlign: 'center',
							height: '200px',
							width: '200px',
						}}
					>
						Item 1
					</div>
				</Grid>
			</Grid>
			<img src={ImgPath} alt="" />
		</Paper>
	);
};

export default Sponsors;
