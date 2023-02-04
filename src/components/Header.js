import React from 'react';
import { Button } from '@mui/material';
// import './App.css';
import './Home.css';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';
const useStyles = makeStyles({
	contactUs: {
		color: 'whitesmoke',
	},
	buttonPrimary: {
		fontSize: '10px',
		color: 'white',
		opacity: '0.8',
	},
});
export const App = () => {
	const classes = useStyles();
	return (
		<div>
			<section className="hero">
				<div className="container">
					<div className="hero-inner">
						<div className="hero-copy">
							<h1 className="hero-title mt-0">ISTE SC MANIT</h1>
							<p className="hero-paragraph">
								Best Students' Chapter in Madhya Pradesh-Chhattisgarh Region
								from 3 consecutive years.
							</p>
							<div className="hero-cta">
								{/* <a className="button button-primary">Read More</a>
								 */}
								<Button variant="contained" size="small">
									<Typography className={classes.buttonPrimary}>
										Read More
									</Typography>
								</Button>
								<Button>
									<Typography className={classes.buttonPrimary}>
										Contact US
									</Typography>
								</Button>
							</div>
						</div>
						<div className="hero-figure anime-element">
							<svg
								className="placeholder"
								width={528}
								height={396}
								viewBox="0 0 528 396"
							>
								<rect
									width={528}
									height={396}
									style={{ fill: 'transparent' }}
								/>
							</svg>
						</div>
						{/* <div
								className="hero-figure-box hero-figure-box-01"
								data-rotation="45deg"
							/>
							<div
								className="hero-figure-box hero-figure-box-02"
								data-rotation="-45deg"
							/>
							<div
								className="hero-figure-box hero-figure-box-03"
								data-rotation="0deg"
							/>
							<div
								className="hero-figure-box hero-figure-box-04"
								data-rotation="-135deg"
							/>
							<div className="hero-figure-box hero-figure-box-05" />
							<div className="hero-figure-box hero-figure-box-06" />
							<div className="hero-figure-box hero-figure-box-07" />
							<div
								className="hero-figure-box hero-figure-box-08"
								data-rotation="-22deg"
							/>
							<div
								className="hero-figure-box hero-figure-box-09"
								data-rotation="-52deg"
							/>
							<div
								className="hero-figure-box hero-figure-box-10"
								data-rotation="-50deg"
							/>
						</div> */}
					</div>
				</div>
			</section>
		</div>
	);
};
export default App;
