// Initialization.

var imagesExpected = 0;
var imagesReady = 0;
var images = {};

var initImage = function(imgName, src) {
  imagesExpected++;
  images[imgName] = new Image();
  images[imgName].onload = function() {
    imagesReady++;
  };
  images[imgName].src = "images/" + src;
}

initImage("ship", "cargoship.png");
initImage("sun", "sun.png");
initImage("planet", "planet.png");
initImage("planet2", "planet2.png");

// Game objects.

var ship = {
  speed: 100, // Acceleration in pixels per second per second.
  rspeed: 2, // Rotational velocity in radians per second.
  maxSpeed: 100, // Max speed in pixels per second.
  friction: 50,
  scale: 0.6,
};

var sun = {
  p: new Point(0, 0),
  rot: 0,
  rotSpeed: 2 * Math.PI / 200,
};

var Planet = function(sun, d, rPeriod, initR, rotPeriod, s, img) {
  this.sun = sun;
  this.d = d;
  this.rSpeed = 2 * Math.PI / rPeriod;
  this.s = s;
  this.r = initR;
  this.rot = 0;
  this.rotSpeed = 2 * Math.PI / rotPeriod;
  this.img = img;
}

var planets = [
  new Planet(sun, 200, 80, 0, -20, 0.3, images["planet"]),
  new Planet(sun, 150, 60, 0, -35, 0.4, images["planet2"]),
];
