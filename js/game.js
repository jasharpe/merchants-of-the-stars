// Cross-browser support for requestAnimationFrame.
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then;

var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  draw();

  then = now;

  requestAnimationFrame(main);
};

var init = function() {
  // Center the ship at the center of the screen with no rotation and no
  // velocity.
  ship.p = new Point(0, 0);
  ship.v = new Vector(0, 0);
  ship.r = 0;
}

var startWhenReady = function() {
  if (imagesExpected == imagesReady) {
    setTimeout(startWhenReady, 10);
  } else {
    init();
    then = Date.now();
    main();
  }
}
