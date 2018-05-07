window.onload = function () {
    var canvas=document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
        ctx.lineWidth = 5;


    var PI2 = Math.PI * 2,
        radius = document.getElementById('radius'),
        height = document.getElementById('height'),
        color = document.getElementById('color'),
        stroke = document.getElementById('border');


    radius.addEventListener('change', draw);
    radius.addEventListener('mousemove', draw);
    height.addEventListener('change', draw);
    height.addEventListener('mousemove', draw);
    color.addEventListener('change', draw);
    stroke.addEventListener('change', draw);

    draw();

    function show() {
        var x = radius.value,
            y = height.value,
            showRadius =  x,
            showHeight =  y;
        document.getElementById('radiusValue').innerHTML = showRadius;
        document.getElementById('heightValue').innerHTML = showHeight;
    }
    // To draw
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.arc(500,210,radius.value,0,PI2);
        ctx.fillStyle = color.value;
        ctx.strokeStyle = stroke.value;
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        // to draw a square
        ctx.beginPath();
        ctx.strokeRect(800, 390, 100, -height.value);
        ctx.fillStyle = color.value;
        ctx.fillRect(800, 390, 100, -height.value);
        ctx.strokeStyle = stroke.value;
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        ctx.save();
        ctx.translate(231.5, 93.5);
        ctx.scale(1, 0.2072072072072072);
        ctx.beginPath();
        ctx.arc(619, 1450, 50, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore()
        ctx.fillStyle = color.value;
        ctx.strokeStyle = stroke.value;
        ctx.fill();

        ctx.save();
        ctx.scale(1, 0.2072072072072072);
        ctx.beginPath();
        ctx.arc(850, 1855 - (height.value * 4.8), 50, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore()
        ctx.fillStyle = color.value;
        ctx.strokeStyle = stroke.value;
        ctx.fill();

        show();
    }
}
