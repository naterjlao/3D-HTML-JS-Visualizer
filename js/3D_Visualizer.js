/*global document:true*/
/*global math:true*/

var hypt = 100;
var side = math.sqrt(math.pow(hypt, 2) / 2);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeRect(0, 0, side, side);

var m = math.matrix([[0,1],[0,2],[0,3]]);

draw2DPath(m, null);

function draw2DPath(matrix, ctx) {
    "use strict";
    
    console.log(matrix.size());
    console.log(matrix.get([0,1]));
    matrix.forEach(function (value,index,matrix) {
        console.log(value,' ',index);
    })
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
