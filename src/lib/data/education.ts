import Assets from './assets';
import type { Education } from './types';

const asset = (url: string): { light: string; dark: string } => ({
	light: url,
	dark: url
});


const title = 'Education';

const iiestLogoURL=`https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/IIEST_Shibpur_Logo.svg/250px-IIEST_Shibpur_Logo.svg.png`

const iiestSubjects=[
	'Introduction to Computing','Discrete Structures', 'Digital Logic', 'Data Structures', 'Signals and Systems', 'Design and Analysis of Algorithm', 'Computer Architecture and Organization', 'Programming Paradigms', 'Theory of Computation', 'Introduction to Data Science', 'Microprocessor Based Systems', 'Database Management Systems', 'Graph Algorithms', 'Soft Computing', 'Operating Systems', 'Data Communication and Computer Network', 'Software Engineering', 'Information Security and Cryptography', 'Computing-in-Memory Architecture', 'Compiler Design', 'Machine Learning', 'Mobile and Pervasive Computing', 'Artificial Intelligence', 'English', 'Sociology & Professional Ethics', 'Finanace, Economics and Management for Engineers'
]


const ucbLogoURL=`/logos/ucb.jpeg`

const rkmLogoURL=`https://rkmvvmmalda.org/images/209-2096279_mission-images-png.png`

const items: Array<Education> = [
	{
		degree: 'BTech in Computer Science and Technology',
		description: 'CGPA: 9.39 (upto 6th Sem)',
		location: 'Howrah',
		logo: asset(iiestLogoURL),
		name: '',
		organization: 'Indian Institue of Engineering Scince and Technology, Shibpur',
		period: { from: new Date(2022, 10, 16),  },
		shortDescription: 'CGPA: 9.39 (upto 6th Sem)',
		slug: 'btech-cst',
		subjects: iiestSubjects
	},

	{
		degree: 'Higher Secondary Education (WBCSHSE)',
		description: 'Percentage: 97.8%',
		location: 'Malda',
		logo: asset(ucbLogoURL),
		name: '',
		organization: 'Malda UCB Vidyalaya',
		period: { from: new Date(2020, 5, 16), to: new Date(2022, 6, 1) },
		shortDescription: 'Percentage: 97.8%',
		slug: 'hse',
		subjects: ['Bengali', 'English', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science']
	},

	{
		degree: 'Secondary Education (WBBSE)',
		description: 'Percentage: 97.57%',
		location: 'Malda',
		logo: asset(rkmLogoURL),
		name: '',
		organization: 'Ramakrishna Mission Vivekananda Vidyamandir, Malda',
		period: { from: new Date(2018, 0, 2), to: new Date(2020, 4, 1) },
		shortDescription: 'Percentage: 97.57%',
		slug: 'se',
		subjects: ['Bengali', 'English', 'Mathematics', 'Physicsal Science', 'Life Science', 'History', 'Geography']
	},

	// {
	// 	degree: 'Bachelor degree of Computer Science',
	// 	description: '',
	// 	location: 'Tunisia',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'ISTIC',
	// 	period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item',
	// 	subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	// },
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

const EducationData = { title, items };

export default EducationData;
