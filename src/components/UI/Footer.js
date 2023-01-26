import React from 'react';

import './Footer.css';

import { LogoFacebook } from 'react-ionicons';
import { LogoInstagram } from 'react-ionicons';
import { LogoLinkedin } from 'react-ionicons';
import { MapOutline } from 'react-ionicons';
import { PhonePortraitOutline } from 'react-ionicons';
import { MailOpen } from 'react-ionicons';

const Footer = (props) => {
	return (
		<div class="footer-container-main hidden" id="footer">
			<div class="footer-container">
				<div class="footer-left">
					<div class="footer-block">
						<h3 class="center-text">
							<MapOutline color={'white'} height="50px" width="50px" /> Address
						</h3>
						<p class="center-text">
							<a
								href="https://goo.gl/maps/nTNnuX6w5YbGKTic7"
								target="_blank"
								className="text"
							>
								Maulana Azad National Institute of Technology, Bhopal
							</a>{' '}
						</p>
					</div>
				</div>
				<div class="footer-mid">
					<div class="footer-block">
						<h3 class="center-text">
							<PhonePortraitOutline
								color={'white'}
								height="50px"
								width="50px"
							/>{' '}
							Contact
						</h3>
						<p>
							<a href="tel://9140160345" target="_blank" className="text">
								<i class="fas fa-phone " aria-hidden="true"></i>
								Animesh Nayak +91 8504036415
							</a>
						</p>
						<p>
							<a href="tel://9140160345" target="_blank" className="text">
								<i class="fas fa-phone " aria-hidden="true"></i>
								Navyasree Konagalla +91 9490165056
							</a>
						</p>
					</div>
				</div>
				<div class="footer-right">
					<div class="footer-block">
						<h3 class="center-text">
							<MailOpen color={'white'} height="50px" width="50px" /> Email
							Address
						</h3>
						<p class="center-text">
							<a
								href="mailto:istescmanit@gmail.com"
								className="text"
								target="_blank"
							>
								istescmanit@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<div class="footer-block">
				<h3 class="center-text">
					<i class="fas fa-link" aria-hidden="true"></i>
					Social Links
				</h3>
				<div class="social-icon">
					<div class="icon">
						<a href="https://www.instagram.com/istemanit" target="_blank">
							<LogoInstagram color={'white'} height="50px" width="50px" />
						</a>
					</div>
					<div class="icon">
						<a href="https://www.facebook.com/ISTESCMANIT" target="_blank">
							<i class="fab fa-facebook fa-2x"></i>
							<LogoFacebook color={'white'} height="50px" width="50px" />
						</a>
					</div>
					<div class="icon">
						<a
							href="https://www.linkedin.com/company/iste-sc-manit"
							target="_blank"
						>
							<LogoLinkedin color={'white'} height="50px" width="50px" />
						</a>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<p class="copyright">
				Copyright © 2022 by{' '}
				<span>
					<a href="https://istemanit.in/" className="text" target="_blank">
						ISTE-SC MANIT
					</a>
				</span>
				. <span class="all">All rights reserved.</span>
			</p>
		</div>
	);
};

export default Footer;
