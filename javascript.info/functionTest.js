function sum(x, y, z) {
	console.log(arguments[0]); // 1
	console.log(arguments[1]); // 2
	console.log(arguments[2]); // undefined
	return x+y+z;
}

sum(1,2);