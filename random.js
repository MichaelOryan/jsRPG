var Algorithm = Algorithm || {};

Algorithm.rand = function(n)
{
    return Math.floor(Math.random() * n);
};

Algorithm.pickRandom = function(array)
{
    return array[Algorithm.rand(array.length)];
};