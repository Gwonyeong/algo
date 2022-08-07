function solution3 (arr, h){
    let answer = 0;

    arr.sort((a,b) => {
        if(a > b) return -1;
    })
    
    for(let i =0; i < arr.length -1; i++){
        if(arr[i] - h > arr[i+1]){
            arr[i+1] = arr[i] - h;
            answer++
        }
    }
    
    if(arr[arr.length-1] !== 0) answer++
    return answer;
}
console.log(solution3([26,35,42,12,0] , 9))