var clamp = function(val, min, max) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

var wrap = function(val, max) {
  if (val > max) {
    return val - max * Math.floor(val / max);
  }
  return val;
}

// TODO: actually use this for something.
var boxCollide = function (spr1, spr2) {
  return spr1.x <= (spr2.x + spr2.w) &&
      spr2.x <= (spr1.x + spr1.w) &&
      spr1.y <= (spr2.y + spr2.h) &&
      spr2.y <= (spr1.y + spr1.h);
};
