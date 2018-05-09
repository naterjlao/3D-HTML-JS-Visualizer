/* Abstract class of a 3D Object. All objects in the 3D
space must have a origin that is centered in the cartesian
coordinates (x,y,z) */
class Shape3d {
    constructor(x,y,z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    
    /* Getters and Setters */
    get x() { return this._x; }
    get y() { return this._y; }
    get z() { return this._z; }
    set x(x) { this._x = x; }
    set y(y) { this._y = y; }
    set z(z) { this._z = z; }
}

/* Defines a perspective object of the 3d space.
Included in this definition is the origin of the
viewpoint, its rotation about the z-axis (rot) and
its tilt away from the y-axis. */
class Perspective extends Shape3d {
    constructor(x,y,z,rot,tilt) {
        super(x,y,z);
        this._rot = rot;
        this._tilt = tilt;
    }
    
    /* Getters and Setters */
    get rot() { return this._rot; }
    get tilt() { return this._tilt; }
    set rot(rot) { this._rot = rot; }
    set tilt(tilt) { this._tilt = tilt; }
}

class Cube extends Shape3d {
    constructor(x,y,z,size) {
        super(x,y,z);
        this._size = size;
    }
    
    /* Getters and Setters */
    get size() { return this._size; }
    set size(size) { this._size = size; }
    
    /* Generates a 3D matrix that contains the points of
    the cube in a vector path. This path can either be constructed
    using 3D path, or by using the 3d rectangular draw. */
    generateMatrix() {
        var x = this.x
        var y = this.y
        var z = this.z
        var s = this.size / 2;
        var corner1 = [x+s,y+s,z+s];
        var corner2 = [x-s,y+s,z+s];
        var corner3 = [x-s,y-s,z+s];
        var corner4 = [x+s,y-s,z+s];
        var corner5 = [x+s,y+s,z-s];
        var corner6 = [x-s,y+s,z-s];
        var corner7 = [x-s,y-s,z-s];
        var corner8 = [x+s,y-s,z-s];
        
        return math.transpose(
            math.matrix(
                [
                    corner1, corner2, corner3, corner4,
                    corner4, corner1, corner5, corner8,
                    corner8, corner4, corner3, corner7,
                    corner7, corner8, corner5, corner6,
                    corner6, corner7, corner3, corner2,
                    corner2, corner6, corner5, corner1
                ]
            ));
    }
}

/******************* TEST CODE ****************/
var p = new Perspective(0,0,0,0,0)
p.rot = 78
console.log(p.rot)
console.log(math.PI)
console.log(math.PI/360)
cube = new Cube(0,0,0,10)
console.log(math.transpose(cube.generateMatrix()).format())
/*************** END OF TEST CODE ***************/