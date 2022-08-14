function solution(n){
    //n이 1보다 작은경우 재귀함수를 멈춘다.     
    console.log(n)
    if(n < 1){ 
        return 0
    }
    return n + solution(n-1)
    
    //solution(n-1) === n-1 +solution(n-2)인 원리
}
console.log(solution(10))

