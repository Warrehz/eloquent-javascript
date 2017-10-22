function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
}

var grid = ["top left", "top middle", "top right",
            "bottom left", "bottom middle", "bottom right"];

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
}

Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
}

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
}

// test of Grid prototype and its methods

// var grid = new Grid(5, 5);
// console.log(grid.get(new Vector(1, 1)));
//
// grid.set(new Vector(1, 1), "X");
// console.log(grid.get(new Vector(1, 1)));


// directions keys for the moving critters
var directions = {
  "n": new Vector(0, -1),
  "ne": new Vector(1, -1),
  "e": new Vector(1, 0),
  "se": new Vector(1, 1),
  "s": new Vector(0, 1),
  "sw": new Vector(-1, 1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, -1)
}

// helper function that chooses random element of an array
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// array for random directions to be chosen from
var directionNames = "n ne e se s sw w nw".split(" ");

// simple bouncing critter that moves randomly
function BouncingCritter() {
  this.direction = randomElement(directionNames);
}

// act method that allows the critter to view in a direction
BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != " ") {
    this.direction - view.find(" ") || "s";
  }
  return {type: "move", direction: this.direction};
}

// ??????????????????????????????????????????????????????
function elementFromChar(legend, ch) {
  if (ch == " ") {
    return null;
  }
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

// world constructor to create world based on the map, using the legend
function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var i = 0; i < line.length; i++) {
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
    }
  });
}
