var kar = {
	x: 200, 
	y: 20,
	dx: 0, 
	dy: 0, 

	draw: function(ctx) {
		ctx.fillRect(this.x, this.y,40,15);
	}
}

var ctx = document.getElementById('canvas').getContext('2d');
// ctx.strokeStyle = 'rgb(255, 0, 0)';
// ctx.fillStyle = 'rgb(255, 0, 0)';
kar.draw(ctx);
