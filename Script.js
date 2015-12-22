function one(x){
	x = x+10;
	return x;
}

function two(y){
	y = y * y;
	return y;
}

function three(z){
	z = z - 5;
	return z;
}








console.log("Our number is " + one(two(three(10))) + ".");