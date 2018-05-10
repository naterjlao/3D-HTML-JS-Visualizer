/*global document:true*/
/*global math:true*/

/* Setup the canvas in the document */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/***************** METHOD DEFINITIONS ***************/

function clear(ctx) {
    ctx.clearRect(0,0,
                  canvas.getAttribute("width"),
                  canvas.getAttribute("height"));
}

/* Draws a path based on the given 2D matrix. If transpose parameter is true, the matrix is transposed before processing.*/
function draw2dPath(matrix, ctx, transpose = false) {
    //"use strict";
    
    /* If specified, transpose the matrix*/
    if (transpose) {
        matrix = math.transpose(matrix);
    }
    
    /* Flip the image by the x axis */
    matrix = math.multiply(math.matrix([[1,0],[0,-1]]),matrix)
    
    /* Displacement values for final image */
    var x_disp = canvas.getAttribute("width")/2;
    var y_disp = canvas.getAttribute("height")/2;
    
    /* Draw the matrix path */
    var col_index = 1; // Set index to SECOND vector
    var col_size = matrix.size()[1]; // Get num of cols
    
    ctx.beginPath(); // Start to draw
    ctx.moveTo(getX(matrix,0) + x_disp ,
               getY(matrix,0) + y_disp) // Move to initial pos
    
    /* Draw the described path */
    while (col_index < col_size) {
        ctx.lineTo(getX(matrix,col_index) + x_disp,
                   getY(matrix,col_index) + y_disp)
        col_index = col_index + 1;
    }
    
    /* Final draw */
    ctx.stroke();
}

/* Projects the 3d matrix to the 2d plane using a perspective object. This is done using a matrix
multiplication of the transpose of the perspective 
object P and the matrix object M: t(P)M */
function projectMatrix(matrix,perspective) {
    /* TODO Need to add a displacement and zoom factor based on perspective */
    
    /* It may be necessary to perform a shift to 
    origin then a shift back to position */
    return math.multiply(perspective.generateMatrix(),matrix);
}

function projectShape3d(shape,perspective) {
    
}
