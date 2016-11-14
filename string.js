var Algorithm = Algorithm || {};

Algorithm.altCaps = function(str, startUpper)
{
    var altcaps = "";
    var upper = false;
    if(startUpper !== undefined)
        upper = startUpper;
    for (var i in str)
    {
        if(upper)
            altcaps += str.charAt(i).toUpperCase();
        else
            altcaps += str.charAt(i).toLowerCase();
        upper = !upper;
    }
    return altcaps;
};