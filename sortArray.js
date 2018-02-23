//Sort array and return 2nd lowest value

function second(arr){
	if(arr.length == 1 || arr.length == 0){
		return arr;
	}
	var flag = false;
	
	while(!flag){
		
		flag = true;
		
		for(var i = 0; i < arr.length-1; i ++){
			if(arr[i] > arr[i+1]){
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				flag = false;
            }
        }
    }
    console.log(arr)
    return arr[1];
}

console.log(second([4,3,8,2,1]));
