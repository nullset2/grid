//grid.js
//alfredo gallegos, 2016

var square_size = 30;
var grid_size = 900;

getRandomColor = function() {
    COLORS = ["cyan", "magenta", "yellow"];
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

canvas = document.getElementById("grid");

for(var v_offset = 0; v_offset <= grid_size; v_offset += square_size){
    for(var h_offset = 0; h_offset <= grid_size; h_offset += square_size){
        context = canvas.getContext("2d");

        //draw bottom part of the square
        context.beginPath();
        context.moveTo(h_offset, v_offset);

        context.lineTo(h_offset, v_offset-square_size);
        context.lineTo(h_offset + square_size, v_offset - square_size);
        context.closePath();

        context.fillStyle = getRandomColor();
        context.fill();

        //draw bottom part of the square
        context.beginPath();
        context.moveTo(h_offset, v_offset);

        context.lineTo(h_offset + square_size, v_offset);
        context.lineTo(h_offset + square_size, v_offset - square_size);
        context.closePath();

        context.fillStyle = getRandomColor();
        context.fill();
    }
}
