var RPG = RPG || {};

RPG.RPGNames = [];
// First names
RPG.RPGNames[0] = ["Stuart", "Michael", "John", "Larry"];

// Last names

RPG.RPGNames[1] = ["Cats", "Ryan", "The Magnificent"];

RPG.genName = function(names)
{
    var name = "";
    // Is this the first name being appended to name for determining spaces
    var first = true;
    // Names array has been passed
    if(names !== undefined)
    {
        for(var i in names)
        {
            if(!first)
            {
                name += " ";
            }
            else
            {
                first = false;
            }
            name += Algorithm.pickRandom(names[i]);
        };
    }
    // Use default names or names set to RPG.RPGNames
    else
    {
        for(var i in RPG.RPGNames)
        {
            if(!first)
            {
                name += " ";
            }
            else
            {
                first = false;
            }
            
            name += Algorithm.pickRandom(RPG.RPGNames[i]);
        };
    }
    return name;
};

RPG.nameFrom = function (nameList)
{
    var tokens = new Array();
    for(i in nameList)
    {
        console.log(nameList[i]);
        var newTokens = nameList[i].tokens("aeiouAEIOU");
        console.log(newTokens);
        tokens = tokens.concat(newTokens);
        
        console.log(tokens);
    }
    var name = "";
    for(var i = 0; i < Algorithm.rand(10) +3; i++)
    {
        name += Algorithm.pickRandom(tokens);
    }
    name = name.toLowerCase();
    console.log(name);
    return "name";
}