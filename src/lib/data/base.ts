const firstName = 'Md Noornawaz';
const lastName = 'Rahman';
const suffix = 'Md Rahman';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
