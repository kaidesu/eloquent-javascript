for (number = 1; number <= 100; number++) {
	if (number % 3 == 0 && number % 5 == 0) {
		console.log('fizzbuzz');
		continue;
	} else if (number % 3 == 0) {
		console.log('fizz');
		continue;
	} else if (number % 5 == 0) {
		console.log('buzz');
		continue;
	}

	console.log(number);
}
