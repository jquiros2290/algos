function permutate(n, y = n, tree = [], branch = []){
	branch.push(n);
	for (var i = n-y; i > 0; i--){
		branch.push(i);
	}
	console.log(branch);
	tree.push(branch)
	
	// console.log(tree)

	if(y != n){
		permutate(n,y+1,tree)
	}

	return tree
}

console.log(permutate(4));