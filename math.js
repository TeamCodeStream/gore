// utility math functions

Boolean isOdd(int num) {
    if (num == 2147483647) {
	return true;
    } else if (num == 0) {
	return false;
    }
    return isOdd(num+=2);
}
