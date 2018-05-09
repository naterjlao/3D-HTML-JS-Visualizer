/*global document:true*/
/*global math:true*/

/* Setup the canvas in the document */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/***************** METHOD DEFINITIONS ***************/

/* Returns the x and y coordinates of a specified
column vector of 3d matrix */
function getX(matrix,col_index) { return matrix.get([0,col_index]) }
function getY(matrix,col_index) { return matrix.get([1,col_index]) }

/* Converts a degree angle to radian for use
in trigonometric functions. */
function degToRad(degree) {
    return math.PI * 2 * degree / 360;
}

/* Draws a path based on the given 2D matrix. If transpose parameter is true, the matrix is transposed before processing.*/
function draw2dPath(matrix, ctx, transpose = false) {
    //"use strict";
    
    /* If specified, transpose the matrix*/
    if (transpose) {
        matrix = math.transpose(matrix);
    }
    
    /* Draw the matrix path */
    ctx.beginPath(); // Start to draw
    ctx.moveTo(getX(matrix,0),getY(matrix,1)) // Move to initial pos
    var col_index = 1; // Set index to SECOND vector
    var col_size = matrix.size()[1]; // Get num of cols
    
    /* Draw the described path */
    while (col_index < col_size) {
        ctx.lineTo(getX(matrix,col_index),getY(matrix,col_index))
        col_index = col_index + 1;
    }
    
    /* Final draw */
    ctx.stroke();
}

/* Projects the 3d matrix to the 2d plane using a perspective object */
function project3d(matrix,perspective) {
    
}


/*************** TEST CODE ************/
var hypt = 100;
var side = math.sqrt(math.pow(hypt, 2) / 2);
ctx.strokeRect(0, 0, side, side);
var m = math.matrix([[0,0],[50,50],[100,50],[100,100],[50,100],[50,50]]);
draw2dPath(m, ctx, true);
var p = new Perspective(0,0,0,0,0)
console.log(degToRad(720))
console.log(math.sin(degToRad(90)))
/************** END OF TEST CODE **************/