import React from 'react';

import Navbar from '../components/UI/Navbar';
import Container from '../components/TeamComponents/Container';

import data from '../assets/TeamData';

function parseImage(text) {
	let i = text.indexOf('id');
	let id = '';
	for (let j = i + 3; j < text.length; j++) {
		id = id + text[j];
	}
	return `https://drive.google.com/uc?export=view&id=${id}`;
}

const priority = {
	President: 50,
	"Student's Chairperson": 49,
	'Vice-Chairperson': 48,
	Convener: 47,
	'Co-convener': 46,
	Treasurer: 45,
	'Core Team Member': 43,
	Secretary: 42,
	Finance: 41,
	'General Affairs': 40,
	'Sponsorship and Marketing': 39,
	Technical: 38,
	'Web Operations': 37,
	'Senior Web': 36,
	'Public Relations': 35,
	'Public Relation': 35,
	Logistics: 34,

	Media: 33,

	Design: 31,
	Creatives: 30,
	Content: 29,
	Quizzing: 28,
	'Team Manager': 27,
	'Team Management': 26,
	Executive: 10,
	// Designer: 9,

	'Executive and Content Writer': 10,
	'Web Developer': 9,
	'Web developer': 9,
	'Graphic Designer': 8,
	'Content Writer': 7,
	'Content writer': 7,
	'Video Editor': 6,
	'Video editor': 6,
	Photographer: 5,
};

data.forEach((entry) => {
	if (entry['photo'] != undefined) {
		if (entry['photo'].indexOf('drive') == -1) entry.imgsrc = entry['photo'];
		else entry.imgsrc = parseImage(entry['photo']);
	} else {
		entry.imgsrc = `../assets/team_img/dummy.png`;
	}

	entry['priority'] = -1;
	for (const post in priority) {
		if (entry.vertical.indexOf(post) != -1) {
			entry.priority = priority[post];
			break;
		}
	}
	if (entry['instagramProfile']) {
		if (entry['instagramProfile'].indexOf('instagram') == -1) {
			entry[
				'instagramProfile'
			] = `https://www.instagram.com/${entry['instagramProfile']}`;
		}
	}
	if (
		entry['year'] == '3rd' &&
		(entry['vertical'].trim() == 'Executive' ||
			entry['vertical'].trim() == 'Video Editor' ||
			entry['vertical'].trim() == 'Photographer' ||
			entry['vertical'].trim() == 'Video editor')
	) {
		entry['vertical'] = 'Team Member';
	}
});

data.sort(function (a, b) {
	if (a.priority < b.priority) return 1;
	else if (a.priority > b.priority) return -1;
	else {
		if (a.name > b.name) return 1;
	}
	return -1;
});

const data4 = [];
const data3 = [];
const data2 = [];

data.forEach((entry) => {
	if (entry.year == '4th' || entry.year == '4') data4.push(entry);
	if (entry.year == '3rd' || entry.year == '3') data3.push(entry);
	if (entry.year == '2nd' || entry.year == '2') data2.push(entry);
});

const TeamPage = (props) => {
	return (
		<>
			<Navbar />
			<Container year="4th" data={data4} />
			<Container year="3rd" data={data3} />
			<Container year="2nd" data={data2} />
		</>
	);
};

export default TeamPage;
