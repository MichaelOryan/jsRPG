var Algorithm = Algorithm || {};

Algorithm.Ascending = function(a, b) {return a < b;};
Algorithm.Decending = function(a, b) {return a > b;};

Algorithm.Heap = function(comp)
{
    this.array = [];
    this.inOrder = Algorithm.Decending;
    if(comp != undefined)
    	this.inOrder = comp;
};

Algorithm.Heap.prototype.push = function(e)
{
    this.array.push(e);
    this.siftUp(this.array.length - 1);
};

Algorithm.Heap.prototype.pop = function()
{
	var e = undefined;

    if(this.array.length > 0)
    {
	    // Element to pop
	    e = this.array[0];
	    
	    // Move last to first
	    this.array[0] = this.array[this.array.length - 1]; 
	    
	    // Remove last
	    this.array.pop();

	    // Get root into position
	    this.siftDown(0);	
    }
    
    return e;
};

Algorithm.Heap.prototype.isEmpty = function()
{
    return this.array.length == 0;
};


Algorithm.Heap.prototype.siftUp = function(i)
{
	var child = i;
	// Calc parent index
    var parent = Math.floor( (child - 1) / 2);

    // Not at root and child before parent
    while(child > 0 && this.inOrder(this.array[child], this.array[parent]))
    {
    	// Swap
        var tmp = this.array[parent];
        this.array[parent] = this.array[child];
        this.array[child] = tmp;

        // Child new in parents position
        child = parent;
     	parent = Math.floor( (child - 1) / 2);
    }
};

Algorithm.Heap.prototype.siftDown = function(i)
{
	// Initial parent and child
	var parent = i;
	var child = (parent * 2) + 1;
	var swapped = true;

	// While we have children to check
    while(swapped && child < this.array.length)
    {
    	// Haven't swapped yet
    	swapped = false;
    	
    	// Find largest of both children, if there is two
	    if(child + 1 < this.array.length)
	    {
	        if(this.inOrder(this.array[child + 1], this.array[child]))
	            child++;
	    }

	    // Swap with largest child if child is before than parent
	    if(this.inOrder(this.array[child], this.array[parent]))
	    {
	        var tmp = this.array[parent];
	        this.array[parent] = this.array[child];
	        this.array[child] = tmp;

	        // We have swapped
	        swapped = true;

	        // New parent and child
	        parent = child;
	        child = (parent * 2) + 1;
	    }

    }
    
};
