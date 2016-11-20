var Algorithm = Algorithm || {};

Algorithm.Ascending = function(a, b) {return a < b;};
Algorithm.Decending = function(a, b) {return a > b;};

Algorithm.midInt = function(a, b)
{
	return Math.floor((a + b) / 2);
};

// Return position target should be in if it exists in array. ie; left most duplicate
// Still O(logn) but slightly slower speed with larger number of the same entry as the target
Algorithm.bsearch = function(array, target, order) // maybe another var for first or last of duplicates?
{
	var min = 0;
	var max = array.length;
	var mid = Algorithm.midInt(min, max);
	
	if(order == undefined)
	{
		order = Algorithm.Ascending;
	}

	while (min < max)
	{
		if(order(array[mid], target))
		{
			min = mid + 1;
		}
		else
		{
			max = mid;
		}
		mid = Algorithm.midInt(min, max);
	}

	return mid;
};