// write a constructor, Vector, that represents a vector in 2-dimensional space. it takes x and y parameters, has two methods - plus and minus

// creates the constructor function for a Vector
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

// adds the plus method to the Vector prototype
Vector.prototype.plus = function(vector) {
  newObj = new Vector(this.x + vector.x, this.y + vector.y);
  return newObj;
}

// adds the minus method to the Vector prototype
Vector.prototype.minus = function(vector) {
  newObj = new Vector(this.x - vector.x, this.y - vector.y);
  return newObj;
}

// adds the getter property that returns distance from origin, (0, 0), and the point
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

// implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

// design an interface that abstracts iteration over a collection of values
function logFive(sequence) {
  for (i = 0; i < 5; i++) {
    if (!sequence.next()) {
      break;
    }
    console.log(sequence.current());
  }
}

// sets the ArraySeq object that takes an array, sets position to
function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}

// adds the next method to return true or false based on index pos
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1) {
    return false;
  }
  this.pos++;
  return true;
}

// adds the current method that returns current value of array[this.pos]
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
}

arraySequence = new ArraySeq([1, 2, 3, 4, 5, 6]);

logFive(arraySequence);

// sets the RangeSeq object that takes a start and finish number
function RangeSeq(start, finish) {
  this.start = start - 1;
  this.finish = finish;
}

// adds the next method to return true or false based on current number
RangeSeq.prototype.next = function() {
  if (this.start >= this.finish) {
    return false;
  }
  this.start++;
  return true;
}

// adds the current method that returns the current value
RangeSeq.prototype.current = function() {
  return this.start;
}

logFive(new RangeSeq(100, 500));
