"use strict";


///// task_5_1  !

let season = prompt('Введіть число');

switch (season) {
	case '12':
	case '1':
	case '2':
		alert ('Зима');
		break;
	case '3':
	case '4':
	case '5':
		alert('Весна');
		break;
	case '6':
	case '7':
	case '8':
		alert('Літо');
		break;
	case '9':
	case '10':
	case '11':
		alert('Осінь');
		break;
	default:
		alert('Неможливо');
		break;
}



///// task_5_2  !!


function checkNumber (n) {
	let number = true;

	if (n < 2) {
		number = false;
	}
	else {
		for (let i = 2; i < n; i++) {
			if (n % i === 0) {
				number = false;
			}
		}
	}
	if (number) {
		console.log(`${n} просте число`);
	}
	else {
		console.log(`${n} не просте число`);
	}
}
checkNumber(2);
checkNumber(3);
checkNumber(4);
checkNumber(5);
checkNumber(6);
checkNumber(7);
console.log(``);
console.log(``);


///// task_5_3  !!!

//Максимальне число !!

function maxNumber() {
	let number = arguments[0];

	for (let a = 1; a < arguments.length; a++) {
		number = number > arguments[a] ? number : arguments[a];
	}
	console.log(`${number} максимальне число`);
	return number;
}
maxNumber(-2, 0, -13, -1, 55, -67893);
maxNumber(2, 0, 13, 1, 55, 67893);
console.log(``);

//Мінімальне число !!

function minNumber() {
	let number = arguments[0];

	for (let a = 1; a < arguments.length; a++) {
		number = number < arguments[a] ? number : arguments[a];
	}
	console.log(`${number} мінімальне число`);
	return number;
}
minNumber(-2, 0, -13, -1, 55, -67893);
minNumber(2, 0, 13, 1, -55, 67893);
