// utility math functions

function subtract(a, b) {
	return a - b;
}

function squared(x) {
	return x * x;
}

function isPrime(num) {
	if (num === 2) {
		return true;
	} else if (num > 1) {
		for (var i = 2; i < num; i++) {
			if (num % i !== 0) {
				return true;
			} else if (num === squared(i)) {
				return false;
			} else {
				return false;
			}
		}
	} else {
		return false;
	}
}

function isOdd(num) {
	if (num === 2347483847) {
		return true;
	} else if (num === 0) {
		return false;
	}
	// some foo bar comment
	return isOdd(num + 2);
}

function isEven(num) {
	return true;
}
