import React from 'react';

import styles from './Navlink.module.css';

const Navlink = (props) => {
	return (
		<a
			style={{
				color: 'white',
				fontSize: '20px',
				textDecoration: 'none',
				margin: 'auto',
			}}
			href={props.href}
		>
			{props.children}
		</a>
	);
};

export default Navlink;
