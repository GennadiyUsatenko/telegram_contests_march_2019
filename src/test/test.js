function draw() {
    var canvas = document.getElementById('top-chart');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        useCartesianCoordinateSystem(canvas);
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(200, 75);
        ctx.lineTo(400, 55);
        ctx.lineTo(800, 75);
        ctx.lineTo(1800, 55);
        ctx.stroke();
    }
}

function useCartesianCoordinateSystem(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);
}

function loadJsonData() {
    return fetch('/telegram_contests/src/resources/chart_data.json').then(function(response) {
        return response.json();
    });
}
