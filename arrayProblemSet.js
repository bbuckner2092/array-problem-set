// printReverse() - reverse the array
// Create a function printReverse
function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5])
console.log("**********");
printReverse(["a", "b", "c"])