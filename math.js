// utility math functions

function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
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
  if (num === 2147483647) {
    return true;
  } else if (num === 0) {
    return false;
  }
  return isOdd(num + 2);
}
