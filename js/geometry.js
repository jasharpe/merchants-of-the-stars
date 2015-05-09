var Point = function(x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.plus = function(v) {
  return new Point(this.x + v.x, this.y + v.y);
}

var Vector = function(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.len = function() {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}

Vector.prototype.norm = function() {
  var len = this.len();
  if (len > 0) {
    return new Vector(this.x / len, this.y / len);
  } else {
    return new Vector(0, 0);
  }
};

Vector.prototype.dot = function(v) {
  return this.x * v.x + this.y * v.y;
}

Vector.prototype.scale = function(s) {
  return new Vector(this.x * s, this.y * s);
}

Vector.prototype.neg = function() {
  return new Vector(-this.x, -this.y);
}

Vector.prototype.plus = function(v) {
  return new Vector(this.x + v.x, this.y + v.y);
}
