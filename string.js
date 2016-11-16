String.prototype.altCaps = function(startUpper)
{
    var altcaps = "";
    var upper = false;
    if(startUpper !== undefined)
        upper = startUpper;
    for (var i in this)
    {
        if(upper)
            altcaps += this.charAt(i).toUpperCase();
        else
            altcaps += this.charAt(i).toLowerCase();
        upper = !upper;
    }
    return altcaps;
};

String.prototype.tokens = function (c)
{
    var tokens = [];
    var token = "";
    for (var i = 0; i < this.length; i++)
    {
        token += this.charAt(i);
        if(c.includes(this.charAt(i)))
        {
            if(token != "")
                tokens.push(token);
            token = "";
        }   
    }
    
    if(token != "")
        tokens.push(token);
    return tokens;
}