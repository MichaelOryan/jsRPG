var HTML = HTML || {};

HTML.prototype.toProperty = function(name, property)
{
	var str = "";
	str += name;
	str += "=\"";
	str += property;
	str += "\"";
	return str;
}

HTML.prototype.toTag = function(tag, properties, enclosed)
{
	var str = "<" + tag;
	for(i in properties)
	{
		str += " ";
		str += HTML.toProperty(i, properties[i]);
	}
	str += ">";
	str += enclosed;
	str += "</" + tag ">";
	return str;
}