function solution3(arr, start, end){ //n까지의 합을 구하는 문제
    
    let mid = Math.floor((start + end) / 2);
    console.log(`mid : ${mid} ,start : ${start}, end : ${end}`)
    if(end - start <= 1){
        return arr[start]
    }
    return solution3(arr,start,mid) + solution3(arr,mid, end)
}

let arr = [1,2,3,4,5,6,7,8]
console.log(solution3(arr, 0, arr.length))