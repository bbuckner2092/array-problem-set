// printReverse() - reverse the array
// Create a function printReverse
function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5])

// isUniform() - true if array is identical
// Create a function isUniform()
// that takes in the argument array
function isUniform(arr) {
// created a var that holds the 1st index of arr
	var first = arr[0];
	for (var i = 0; i < arr.length; i++) {
// argument number is not equal to 1st index of arr
// Return false
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

// sumArray()
