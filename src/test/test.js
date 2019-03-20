var arr = [{x:25,y:100},{x:50,y:25}];

function animation(canvas) {
    if (arr.length > 8) return;
    var minY = 25;
    var maxY = 100;
    var step = 25;
    var limit = arr.length;

    for(var i = 1; i <= limit; i++) {
        var x = i * step + limit * step;
        if(i % 2 == 0) {
            arr.push({x:x, y:minY});
        } else {
            arr.push({x:x, y:maxY});
        }
    }

    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#D40000';
    ctx.lineWidth = 6;
    //ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.scale(4 / arr.length, 1);
    ctx.beginPath();

    arr.forEach(function(item){
        ctx.lineTo(item.x, item.y);
    });

    ctx.stroke();
    //ctx.restore();
    setTimeout(function() {animation(canvas)}, 2000);
}

function draw() {
    var canvas = document.getElementById('top-chart');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 300, 300);
        ctx.strokeStyle = '#D40000';
        ctx.lineWidth = 6;

        useCartesianCoordinateSystem(canvas);
        ctx.beginPath();
        //ctx.moveTo(75, 50);
        ctx.lineTo(0, 75);
        ctx.lineTo(125, 25);
        ctx.lineTo(150, 100);
        ctx.lineTo(175, 50);
        ctx.lineTo(200, 125);
        ctx.lineTo(225, 25);
        ctx.lineTo(250, 125);
        ctx.lineTo(300, 25);
        ctx.lineTo(325, 125);
        ctx.stroke();

        setTimeout(function() {animation(canvas)}, 2000);
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
