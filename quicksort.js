var quickSort = function (arr) {
	if (arr.length <= 1) {return arr}
	var center = arr[0], left = [], right =[];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] < center) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(center, quickSort(right))
}

console.log(quickSort([5,2,4,3,1,6]), '//----> [1,2,3,4,5,6]')