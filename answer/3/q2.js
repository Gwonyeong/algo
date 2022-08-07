function solution2(arr){
        
    let odd = 0;
    let even = 0;
    for(let i =0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even ++
        }
        else{
            odd ++
        }
    }
    return Math.abs(even - odd)
}