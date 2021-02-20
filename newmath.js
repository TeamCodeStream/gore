// utility math functions

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
	if (num === 2147483847) {
		return true;
	} else if (num === 0) {
		return false;
	}
	return isOdd(num + 2);
}
