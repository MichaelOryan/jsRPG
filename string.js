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

String.prototype.reverse = function()
{
    var rev;
    for(var i = this.length -1; i >= 0; i--)
    {
        rev.push(this[i]);
    }
    return rev;
}

String.prototype.toTag = function(tag, id, cls)
{
    var str = "<";
    str += tag;
    if(id != undefined)
        str += " id=\"" + id +"\"";
    if(cls != undefined)
    {
        str += " class=\"";
        if (cls.constructor === Array)
        {
            str += cls.combine(" ");
        }
        else
        {
            str += cls;
        }
        str += "\"";
    }
    str += ">";
    str += this;
    str += "</" + tag + ">";
    return str;
}

Array.prototype.combine = function(delim)
{
    var str = "";
    var first = true;
    for(var i = 0; i < this.length; i++)
    {
        if(!first)
        {
            str += delim;
        }
        first = false;

        str += this[i];
    }
    return str;
}