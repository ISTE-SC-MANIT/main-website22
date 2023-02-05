import React, { useState } from 'react';

import Navlink from './Navlink';
import { Link } from 'react-router-dom';

import ISTElogo from '../../assets/ISTElogo.svg';
import ham from '../../assets/ham.png';
import style from './Navbar.module.css';
import About from '../About/About';

const Navbar = (props) => {
	const [mobNav, setMobNav] = useState(false);
	const hamClickHandler = (event) => {
		event.preventDefault();
		if (mobNav === true) {
			setMobNav(false);
		} else {
			setMobNav(true);
		}
	};

	return (
		<div className={style.navbar}>
			<div className={`${style['logo']} ${mobNav ? style['hide'] : ''}`}>
				<img src={ISTElogo} />
			</div>
			<div className={style['navlinks-container']}>
				<Link
					to="/main-website22"
					style={{ color: 'white', textDecoration: 'none' }}
				>
					Home
				</Link>
				<Navlink href="/main-website22#about">About us</Navlink>
				<Navlink href="/main-website22#events">Events</Navlink>
				<Navlink href="/main-website22#sponsors">Sponsors</Navlink>
				<Navlink>
					<Link
						to="/main-website22/team"
						style={{ color: 'white', textDecoration: 'none' }}
					>
						Our Team
					</Link>
				</Navlink>
				<Navlink href="#footer">Contact Us</Navlink>
			</div>

			<ul
				className={`${style['mobile-navlink-container']} ${
					mobNav ? '' : style['hide']
				}`}
			>
				<div
					className={`${style.ham} ${style['align-left']}`}
					onClick={hamClickHandler}
				>
					<h1 className="CrossHam">X</h1>
				</div>
				<Link
					onClick={hamClickHandler}
					style={{ color: 'white', textDecoration: 'none' }}
					to="/main-website22"
				>
					Home
				</Link>
				<Navlink onClick={hamClickHandler} to="/main-website22#about">
					About us
				</Navlink>
				<Navlink onClick={hamClickHandler} href="/main-website22#events">
					Events
				</Navlink>
				<Navlink onClick={hamClickHandler} href="/main-website22#sponsors">
					Sponsors
				</Navlink>
				<Navlink onClick={hamClickHandler} to="/main-website22/team">
					Our Team
				</Navlink>
				<Navlink onClick={hamClickHandler} href="#footer">
					Contact Us
				</Navlink>
			</ul>
			<div
				className={`${mobNav ? style.hide : ''} ${style.ham}`}
				onClick={hamClickHandler}
			>
				<img
					src={ham}
					className={`${style.hamImg} ${mobNav ? style['hide'] : ''}`}
				/>
			</div>
		</div>
	);
};

export default Navbar;
