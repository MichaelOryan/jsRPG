var Algorithm = Algorithm || {};

Algorithm.rand = function(n)
{
    return Math.floor(Math.random() * n);
};

Algorithm.pickRandom = function(array)
{
    return array[Algorithm.rand(array.length)];
};

// http://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
Algorithm.pickRandomProperty = function(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}