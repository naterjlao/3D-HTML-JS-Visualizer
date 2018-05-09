/*********** UTILITY MATHEMATICAL FUNCTIONS *************/

/* Returns the x and y coordinates of a specified
column vector of 3d matrix */
function getX(matrix,col_index) { 
    return matrix.get([0,col_index]); 
}
function getY(matrix,col_index) {
    return matrix.get([1,col_index]); 
}

/* Converts a degree angle to radian for use
in trigonometric functions. */
function degToRad(degree) {
    return math.PI * 2 * degree / 360;
}