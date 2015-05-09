// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var UP = 38;
var DOWN = 40;
var LEFT = 37;
var RIGHT = 39;

var updateSun = function(delta) {
  sun.rot += sun.rotSpeed * delta;
  sun.rot = wrap(sun.rot, 2 * Math.PI);
}

var updatePlanets = function(delta) {
  for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];

    planet.r += planet.rSpeed * delta;
    planet.r = wrap(planet.r, 2 * Math.PI);

    var v = new Vector(Math.sin(planet.r), Math.cos(planet.r)).scale(planet.d);
    planet.p = planet.sun.p.plus(v);

    planet.rot += planet.rotSpeed * delta;
    planet.rot = wrap(planet.rot, 2 * Math.PI);
  }
}

// Update game objects
var update = function (delta) {
  // Update ship velocity based on inputs.
	if (UP in keysDown || DOWN in keysDown) {
    var directionFactor = UP in keysDown ? 1 : -1;
    ship.v = ship.v.plus(
        new Vector(Math.sin(ship.r), -Math.cos(ship.r))
            .scale(directionFactor * ship.speed * delta));
	}
	if (LEFT in keysDown) {
		ship.r -= ship.rspeed * delta;
	}
	if (RIGHT in keysDown) {
		ship.r += ship.rspeed * delta;
	}

  // Update ship velocity based on friction.
  var frictionAccel = ship.v.neg().norm().scale(ship.friction * delta);
  if (frictionAccel.len() > ship.v.len()) {
    frictionAccel = frictionAccel.scale(ship.v.len() / frictionAccel.len());
  }
  ship.v = ship.v.plus(frictionAccel);

  // Clamp ship's velocity.
  var speed = ship.v.len();
  if (speed > ship.maxSpeed) {
    ship.v = ship.v.scale(ship.maxSpeed / speed);
  }

  ship.p = ship.p.plus(ship.v.scale(delta));

  // updateSun must come first!!!
  updateSun(delta);
  updatePlanets(delta);
};
