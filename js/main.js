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
        cube1.size = cube1.size + rate;
        cube2.size = cube2.size + rate/2;
        up = cube2.z <= limit 
    } else {
        cube1.z = cube1.z - rate
        cube2.z = cube2.z - rate/2
        cube1.size = cube1.size - rate;
        cube2.size = cube2.size - rate/2;
        up = cube2.z < -limit
    }
}

m = math.matrix([[1,2,3],[4,5,6],[7,8,9]])
console.log(math.multiply(8,m))
console.log(math.eye(2,2))

setInterval(update,20)

/************** END OF TEST CODE **************/

/** HOMEWORK HELP **/

/*

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

function drawPoint(x,y,size = 6) {
    ctx.fillRect(
        xCenter(x) - size/2, 
        yCenter(y) - size/2, 
        size,size
    )
}

function drawPoints(matrix,size = 6) {
    var i = 0;
    while (i < matrix.size()[1]) {
        drawPoint(getX(matrix,i),getY(matrix,i),size)
        i = i + 1
    }
}


function drawGrid(x,y,n,size) {
    if (n > 0) {
        ctx.lineWidth = n * 2
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
*/
/*
var inc = true
var size = 300
var/ n = 1
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

/*
var area = 128
var size_factor = 5
drawGrid(0,0,5,area*size_factor)
m = math.multiply(size_factor, math.transpose(math.matrix([
    [-33,40],[5,20],[-40,16],[-38,-10],
    [8,-8],[-38,-28],[48,-48],[10,28],
    [8,-2],[26,-2],[8,-12],[-16,-48],
    [10,-20],[11,-20],[11,30]
])))
ctx.fillStyle = "green"
drawPoints(m,8)

*/