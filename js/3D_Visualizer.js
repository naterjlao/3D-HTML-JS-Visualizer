/*global document:true*/
/*global math:true*/

var hypt = 100;
var side = math.sqrt(math.pow(hypt, 2) / 2);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeRect(0, 0, side, side);

var m = math.matrix([[0,0],[50,50],[100,50],[100,100],[50,100],[50,50]]);

draw2DPath(m, ctx, true);

/* Draws a path based on the given 2D matrix. If transpose parameter is true, the matrix is transposed before processing.*/
function draw2DPath(matrix, ctx, transpose = false) {
    //"use strict";
    
    if (transpose) {
        matrix = math.transpose(matrix);
    }
    
    /* Reference methods */
    console.log(matrix.size()[1]);
    console.log(matrix.get([0,1]));
    matrix.forEach(function (value,index,matrix) {
        console.log(value,' ',index);
    })
    
    /* Drawing Algorithm */
    ctx.beginPath();
    ctx.moveTo(matrix.get([0,0]),matrix.get([1,0]))
    var col_index = 1;
    var col_size = matrix.size()[1];
    
    while (col_index < col_size) {
        ctx.lineTo(matrix.get([0,col_index]),matrix.get([1,col_index]))
        col_index = col_index + 1;
    }
    
    ctx.stroke();
    
    
}

/* Returns a matrix representation of a cube in the specified coordinates and side length*/
function cube(origin_x, origin_y, origin_z, side_length) {
    "use strict";
    
    return 0;
}

/* Generates a matrix representation of the projection of the given 3D matrix unto 2D space */
function project3D(matrix) {
    "use strict";
}

/* Draws the 3D object unto the canvas*/
function draw3D(matrix, ctx) {
    "use strict";
}
