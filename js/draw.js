var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

var drawBackground = function() {
  ctx.save();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
};

var drawImage = function(img, offset) {
  ctx.save();
  ctx.translate(-img.width / 2, -img.height / 2);
  ctx.drawImage(img, 0, 0);
  ctx.restore();
}

var drawShip = function() {
  ctx.save();

  ctx.translate(ship.p.x, ship.p.y);
  ctx.rotate(ship.r);
  ctx.scale(ship.scale, ship.scale);

  drawImage(images["ship"]);

  ctx.restore();
}

var drawPlanets = function() {
  for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];
    ctx.save();

    ctx.translate(planet.p.x, planet.p.y);
    ctx.rotate(planet.rot);
    ctx.scale(planet.s, planet.s);

    drawImage(planet.img);

    ctx.restore();
  }
}

var drawSun = function() {
  ctx.save();

  ctx.translate(sun.p.x, sun.p.y);
  ctx.rotate(sun.rot);

  drawImage(images["sun"]);

  ctx.restore();
}

var draw = function () {
  // Wipe the screen to black.
  drawBackground();

  ctx.save();

  // Center the camera on the player's ship.
  ctx.translate(canvas.width / 2 - ship.p.x, canvas.height / 2 - ship.p.y);

  drawSun();

  drawPlanets();

  drawShip();
  
  ctx.restore();
};
