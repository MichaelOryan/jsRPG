var Algorithm = Algorithm || {};

Algorithm.Heap = function()
{
    this.array = [];
};

Algorithm.Heap.prototype.siftUp = function(i)
{
    if(i <= 0)
        return;
    var parent = Math.floor( (i - 1) / 2);
    
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
    if(i * 2 >= this.array.length)
        return;
    var child = (i * 2) + 1;
    if(child + 1 < this.array.length)
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
    this.array.push(e);
    this.siftUp(this.array.length - 1);
};

Algorithm.Heap.prototype.pop = function()
{
    if(this.array.length == 0)
        return;
    var e = this.array[0];
    this.array[0] = this.array[this.array.length - 1]; 
    this.array.pop();
    this.siftDown(0);
    return e;
};

Algorithm.Heap.prototype.isEmpty = function()
{
    return this.array.length == 0;
};



Algorithm.MinHeap = function()
{
    this.array = [];
};


Algorithm.MinHeap.prototype.siftUp = function(i)
{
    if(i <= 0)
        return;
    var parent = Math.floor( (i - 1) / 2);
    
    if (this.array[parent] > this.array[i])
    {
        var tmp = this.array[parent];
        this.array[parent] = this.array[i];
        this.array[i] = tmp;
        this.siftUp(parent);
    }
    
};

Algorithm.MinHeap.prototype.siftDown = function(i)
{
    if(i * 2 >= this.array.length)
        return;
    var child = (i * 2) + 1;
    if(child + 1 < this.array.length)
    {
        if(this.array[child] > this.array[child+1])
            child++;
    }
    if(this.array[i] > this.array[child])
    {
        var tmp = this.array[i];
        this.array[i] = this.array[child];
        this.array[child] = tmp;
        this.siftDown(child);
    }
};

Algorithm.MinHeap.prototype.push = function(e)
{
    this.array.push(e);
    this.siftUp(this.array.length - 1);
};

Algorithm.MinHeap.prototype.pop = function()
{
    if(this.array.length == 0)
        return;
    var e = this.array[0];
    this.array[0] = this.array[this.array.length - 1]; 
    this.array.pop();
    this.siftDown(0);
    return e;
};

Algorithm.MinHeap.prototype.isEmpty = function()
{
    return this.array.length == 0;
};

