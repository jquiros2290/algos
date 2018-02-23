//return the first non repeating character of a string
function repeat(str){
	for(var x = 0; x < str.length; x++){
		count = 0;

		for(var i = 0; i < str.length; i++){
			if(i != x){
				if(str[i] == str[x]){
					count++
				}		
			}
		}
		if(count == 0){
			return str[x];
		}
	}
}

console.log(repeat('heheLhen'));