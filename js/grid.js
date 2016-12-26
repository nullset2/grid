//grid.js
//alfredo gallegos, 2016

getRandomColor = function() {
    COLORS = ["cyan", "magenta", "yellow"];
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

canvas = document.getElementById("grid");
context = canvas.getContext("2d");

context.fillStyle = getRandomColor();
context.fillRect(10, 10, 100, 100);
