/*************** TEST CODE ************/
var p = new Perspective(0,0,0,0,30)
var cube1 = new Cube(0,0,0,50)
var cube2 = new Cube(0,0,0,100)
var cube3 = new Cube(0,0,0,150)

var rate = 4
var limit = 100
var up = true

var dir = [1,2,3]
console.log(dir[1])

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
//setInterval(update,20)
/************** END OF TEST CODE **************/

/** HOMEWORK HELP **/



var center = [
    canvas.getAttribute("width")/2,
    canvas.getAttribute("height")/2
]

function xCenter(x) {
    return center[0] + x
}

function yCenter(y) {
    return center[1] - y
}

function drawPoint(x,y) {
    var size = 80
    ctx.fillRect(
        xCenter(x) - size/2, 
        yCenter(y) - size/2, 
        size,size
    )
}



function drawGrid(x,y,n,size) {
    if (n > 0) {
        ctx.strokeRect(
            xCenter(x) - size/2,
            yCenter(y) - size/2,
            size,size
        )
        
        drawGrid(x+size/4,y+size/4,n-1,size/2)
        drawGrid(x+size/4,y-size/4,n-1,size/2)
        drawGrid(x-size/4,y-size/4,n-1,size/2)
        drawGrid(x-size/4,y+size/4,n-1,size/2)
    }
}

function factorial(n) {
    if (n > 0) { 
        return n * factorial(n-1);
    } else {
        return 1;
    }
}

console.log(factorial(3))

/*
var inc = true
var size = 300
var n = 1
var limit = 4

setInterval(function() {
    clear(ctx)
    drawGrid(0,0,n,size)
    if (inc) {
        n = n + 1
        inc = n <= limit
    } else {
        n = n - 1
        inc = n <= 1
    }
    
}, 1000)
*/

var area = 128
var size_factor = 4
drawGrid(0,0,4,area*size_factor)