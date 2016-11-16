var Algorithm = Algorithm || {};

// Quick Union Weighted Path Compression from
// https://www.cs.princeton.edu/~rs/AlgsDS07/01UnionFind.pdf

Algorithm.QuickUnion = function(n)
{
    this.id = [];
    this.sz = [];
    for (var i = 0; i < n; i++)
    {
        this.id.push(i);
        this.sz.push(1);
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
    if(this.sz[i] < this.sz[j]) {
        this.id[i] = j;
        this.sz[j] += this.sz[i];
    }
    else
    {
        this.id[j] = i;
        this.sz[i] += this.sz[j];
    }
};
