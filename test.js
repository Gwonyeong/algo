let arr = [4,3,2,8,5]
for(let i = 0; i < arr.length-1; i++){
	for(let j = i; j < arr.length; j++){
		if(arr[i] > arr[j]){
			[arr[i], arr[j]] = [arr[j],arr[i]]
		}
	}
} 
console.log(arr)