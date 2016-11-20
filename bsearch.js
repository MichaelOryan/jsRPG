var Algorithm = Algorithm || {};

Algorithm.midInt = function(a, b)
{
	return Math.floor((a + b) / 2);
};

Algorithm.bsearch = function(array, target, order)
{
	var min = 0;
	var max = array.length;
	var mid = Algorithm.midInt(min, max);

	if(order == undefined)
	{
		order = Algorithm.Ascending;
	}

	while (min < max && array[mid] != target)
	{

		if(order(target, array[mid]))
		{
			max = mid;
		}
		else
		{
			min = mid + 1;
		}
		mid = Algorithm.midInt(min, max);
	}

	return mid;
};