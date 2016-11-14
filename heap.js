var Algorithm = Algorithm || {};

Algorithm.Heap = function()
{
    this.array = [];
    this.size = 0;
};


Algorithm.Heap.prototype.siftUp = function(i)
{
    if(i <= 0)
        return;
    var parent = Math.floor(i / 2);
    
    if (this.array[parent] < this.array[i])
    {
        var tmp = this.array[parent];
        this.array[parent] = this.array[i];
        this.array[i] = tmp;
        this.siftUp(parent);
    }
    
};

Algorithm.Heap.prototype.siftDown = function(i)
{
    if(i * 2 >= this.size)
        return;
    var child = i * 2;
    if(child + 1 < this.size)
    {
        if(this.array[child] < this.array[child+1])
            child++;
    }
    if(this.array[i] < this.array[child])
    {
        var tmp = this.array[i];
        this.array[i] = this.array[child];
        this.array[child] = tmp;
        this.siftDown(child);
    }
};

Algorithm.Heap.prototype.push = function(e)
{
    if(this.size == this.array.length)
    {
        this.array.push(e);
    }
    else
    {
        this.array[this.size] = e;
    }
    this.size++;
    this.siftUp(this.size - 1);
};

Algorithm.Heap.prototype.pop = function()
{
    if(this.size == 0)
        return;
    var e = this.array[0];
    this.size--;
    this.array[0] = this.array[this.size];
    this.siftDown(0);
    return e;
};

Algorithm.Heap.prototype.isEmpty = function()
{
    return this.size == 0;
};