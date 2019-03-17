function draw() {
    var canvas = document.getElementById('top-chart');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        useCartesianCoordinateSystem(canvas);
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}

function useCartesianCoordinateSystem(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.translate(0,canvas.height);
    ctx.scale(1,-1);
}
