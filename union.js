var Algorithm = Algorithm || {};

Algorithm.QuickUnion = function(n)
{
    this.id = [];
    for (var i = 0; i < n; i++)
    {
        this.id.push(i);
    }
};

Algorithm.QuickUnion.prototype.root = function(i)
{
    while (i != this.id[i])
    {
        this.id[i] = this.id[this.id[i]];
        i = this.id[i];
    }
    return i;
};

Algorithm.QuickUnion.prototype.find = function(p, q)
{
    return this.root(p) == this.root(q);
};

Algorithm.QuickUnion.prototype.unite = function(p, q)
{
    var i = this.root(p);
    var j = this.root(q);
    this.id[i] = j;
};
