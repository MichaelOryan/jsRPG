var RPG = RPG || {};

RPG.RPGNames = [];
// First names
RPG.RPGNames[0] = ["Pizza", "Michael", "Bitey"];

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