function solution4 (arr){
    let answer = 1;
    let idx = 0;
    while(1){
        if(idx > arr.length-1) break
        if(answer < arr[idx]){
            idx = 0
        }
        if(answer >= arr[idx]){
            idx++
            answer++
        }
    }
    return answer
}
