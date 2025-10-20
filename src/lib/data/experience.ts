import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const asset = (url: string): { light: string; dark: string } => ({
	light: url,
	dark: url
});

const iiestDescription =`Developed DigiCertify, a web application for generating and digitally signing certificates.

Built backend using Spring Boot and iText for dynamic PDF generation and digital signatures.

Designed frontend using Thymeleaf to create a user-friendly certificate generation interface.

Improved automation and reduced manual work in certificate creation.`

const iiestLogoURL=`https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/IIEST_Shibpur_Logo.svg/250px-IIEST_Shibpur_Logo.svg.png`

const items: Array<Experience> = [

	 {
		slug: 'internship',
		company: 'IIEST Shibpur',
		description: iiestDescription,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Howrah',
		period: { from: new Date(2025,4,19), to: new Date(2025,6,20) },
		skills: getSkills('ts', 'js', 'nodejs', 'html', 'css', 'thymeleaf', 'springboot', 'java', 'reactjs'),
		name: 'Research & Development Intern',
		color: 'red',
		links: [],
		logo:  asset(iiestLogoURL),
		shortDescription: 'Web Based Document Authentication with Digital Signature'
	},
	// {
	// 	slug: 'open-sourcer',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome tools for developers.',
	// 	contract: ContractType.SelfEmployed,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date() },
	// 	skills: getSkills('ts', 'js'),
	// 	name: 'Open Source Developer',
	// 	color: 'red',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome tools for developers.'
	// },
	// {
	// 	slug: 'software-freelance',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date() },
	// 	skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
	// 	name: 'Freelancer',
	// 	color: 'blue',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// },
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// }
];

const ExperienceData = { title, items };

export default ExperienceData;
