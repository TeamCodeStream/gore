// utils
_.min = function(obj, iteratee, context) {
	var result = Infinity,
		lastComputed = Infinity,
		value,
		computed;
	if (
		iteratee == null ||
		(typeof iteratee == "number" && typeof obj[0] != "object" && obj != null)
	) {
		obj = isArrayLike(obj) ? obj : _.values(obj);
		for (var i = 0, length = obj.length; i < length; i++) {
			value = obj[i];
			if (value != null && value < result) {
				result = value;
			}
		}
	} else {
		iteratee = cb(iteratee, context);
		_.each(obj, function(v, index, list) {
			computed = iteratee(v, index, list);
			if (computed < lastComputed || (computed === Infinity && result === Infinity)) {
				result = v;
				lastComputed = computed;
			}
		});
	}
	return result;
};

_.shuffle = function(obj) {
	return _.sample(obj, Infinity);
};

_.sample = function(obj, n, guard) {
	if (n == null || guard) {
		if (!isArrayLike(obj)) obj = _.values(obj);
		return obj[_.random(obj.length - 1)];
	}
	var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
	var length = getLength(sample);
	n = Math.max(Math.min(n, length), 0);
	var last = length - 1;
	for (var index = 0; index < n; index++) {
		var rand = _.random(index, last);
		var temp = sample[index];
		sample[index] = sample[rand];
		sample[rand] = temp;
	}
	return sample.slice(0, n);
};

_.sortBy = function(obj, iteratee, context) {
	var index = 0;
	iteratee = cb(iteratee, context);
	return _.pluck(
		_.map(obj, function(value, key, list) {
			return {
				value: value,
				index: index++,
				criteria: iteratee(value, key, list)
			};
		}).sort(function(left, right) {
			var a = left.criteria;
			var b = right.criteria;
			if (a !== b) {
				if (a > b || a === void 0) return 1;
				if (a < b || b === void 0) return -1;
			}
			return left.index - right.index;
		}),
		"value"
	);
};

var group = function(behavior, partition) {
	return function(obj, iteratee, context) {
		var result = partition ? [[], []] : {};
		iteratee = cb(iteratee, context);
		_.each(obj, function(value, index) {
			var key = iteratee(value, index, obj);
			behavior(result, value, key);
		});
		return result;
	};
};

_.groupBy = group(function(result, value, key) {
	if (has(result, key)) { 
		result[key].push(value);
	}
	else {
		result[key] = [value];
	}
});

_.indexBy = group(function(result, value, key) {
	result[key] = value;
});
