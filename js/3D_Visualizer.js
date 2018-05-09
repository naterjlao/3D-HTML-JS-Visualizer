/*global document:true*/
/*global math:true*/

/* Setup the canvas in the document */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/***************** METHOD DEFINITIONS ***************/

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

/* Projects the 3d matrix to the 2d plane using a perspective object. This is done using a matrix
multiplication of the transpose of the perspective 
object P and the matrix object M: t(P)M */
function project3d(matrix,perspective) {
    /* It may be necessary to perform a shift to 
    origin then a shift back to position */
    return math.multiply(perspective.generateMatrix(),matrix);
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