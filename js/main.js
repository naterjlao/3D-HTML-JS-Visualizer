/*************** TEST CODE ************/
var p = new Perspective(0,0,0,0,30)
var cube1 = new Cube(0,0,0,50)
var cube2 = new Cube(0,0,0,100)
var cube3 = new Cube(0,0,0,150)

var rate = 4
var limit = 100
var up = true

function update() {
    clear(ctx)
    draw2dPath(projectMatrix(cube1.generateMatrix(),p),ctx)
    draw2dPath(projectMatrix(cube2.generateMatrix(),p),ctx)
    draw2dPath(projectMatrix(cube3.generateMatrix(),p),ctx)
    p.rot = p.rot + 1
    if (up) {
        cube1.z = cube1.z + rate
        cube2.z = cube2.z + rate/2    
        up = cube2.z <= limit 
    } else {
        cube1.z = cube1.z - rate
        cube2.z = cube2.z - rate/2    
        up = cube2.z < -limit
    }
}
setInterval(update,20)
/************** END OF TEST CODE **************/