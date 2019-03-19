function draw() {
    var canvas = document.getElementById('top-chart');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#D40000';
        ctx.lineWidth = 6;

        useCartesianCoordinateSystem(canvas);
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(125, 25);
        ctx.lineTo(150, 100);
        ctx.lineTo(175, 50);
        ctx.lineTo(200, 125);
        ctx.lineTo(225, 25);
        ctx.lineTo(250, 125);
        ctx.lineTo(300, 25);
        ctx.lineTo(325, 125);
        ctx.stroke();

        setTimeout(function() {var ctx = canvas.getContext('2d');ctx.clearRect(0, 0, 300, 300);}, 1000);
        setTimeout(function() {draw()}, 2000);
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
