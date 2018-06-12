var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ref;

var kar = {
	x: 700, 
	y: 200,
	dx: -10,
	dy: 0, 

	step: function() {
		if (this.x < 0 || this.x > canvas.width) {
			this.dx = -1 * this.dx;
		}
		this.x += this.dx;
  		this.y += this.dy;
	},

	draw: function() {
		ctx.fillRect(this.x, this.y, 40, 15);
	}
}

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  kar.step();
  kar.draw();
  ref = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e) {
  ref = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(ref);
});

kar.draw();
