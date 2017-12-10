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
// started at 1 because we are already using arr[0]
	for (var i = 1; i < arr.length; i++) {
// argument number is not equal to 1st index of arr
// Return false
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

// sumArray()
function sumArray(arr) {
	// created a var to hold a total
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

// max()

function max(arr) {
	var max = arr[0];
// started t 1 because we are using 0 from arr[0]
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}