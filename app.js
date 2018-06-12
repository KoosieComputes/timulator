var kar = {
	x: 10, 
	y: 10,
	dx: 0, 
	dy: 0, 

	draw: function(ctx) {
		ctx.fillRect(this.x, this.y,100,40);
	}
}

var ctx = document.getElementById('canvas').getContext('2d');
// ctx.strokeStyle = 'rgb(255, 0, 0)';
// ctx.fillStyle = 'rgb(255, 0, 0)';
kar.draw(ctx);