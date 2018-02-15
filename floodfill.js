//Given a canvas (array of arrays), a x & y coordinate,
//and a color, change the value of the original x/y coord
//and all touching elements with the same value to the color
//given

function floodFill(canvas, xandy, color){
	var x = xandy[0]
	var y = xandy[1]
	var og = canvas[x][y]
	
	canvas[x][y] = color

	// console.log(canvas);
	if((y-1) >= 0 ){
		if(canvas[x][y-1] == og){
			floodFill(canvas, [x,y-1], color)
		}
	}
	if((y+1) < canvas[x].length){
		if(canvas[x][y+1] == og){
			floodFill(canvas, [x,y+1], color)
		}
	}
	if((x-1) >= 0){
		if(canvas[x-1][y] == og){
			floodFill(canvas, [x-1,y], color)
		}
	}
	if((x+1) < canvas.length){
		if(canvas[x+1][y] == og){
			floodFill(canvas, [x+1,y], color)
		}
	}

	return canvas
}



console.log(floodFill(
[[3,2,3,4,3],
 [2,3,3,4,0],
 [7,3,3,5,3],
 [6,5,3,4,1],
 [1,2,3,3,3],
 [2,3,3,3,1]], [2,2], 1))
 