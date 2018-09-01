// Code your solution in this file!

// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
	const firstTwo = [];
	firstTwo.push(drivers[0]);
	firstTwo.push(drivers[1]);
	return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
	const lastTwo = [];
	lastTwo.push(drivers[drivers.length - 2]);
	lastTwo.push(drivers[drivers.length - 1]);
	return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
	return function(multiplier) {
		return num * multiplier;
	}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, fx) {
	return fx(arrayOfDrivers);
	}
