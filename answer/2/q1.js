function sol1(arr){
    let answer = 0;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    console.log(arr)
    answer =arr.findIndex((item) => {
        return item === 3
    })
    return answer + 1;
}

console.log(sol1([1,3,2,4,5,6,7,8]) === 3);
console.log(sol1([8,8,8,7,7,6,9,2,4,4,5,1,3]) === 3);
console.log(sol1([1,2,2,2,3,2,2,2]) === 8);
console.log(sol1([9999,999,99,9,3]) === 1);