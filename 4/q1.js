//재귀함수

// 재귀함수를 구현해 봅시다!

// 문제

// 정수 n이 주어집니다. 정수 1 부터 n까지 모든 숫자의 합을 반환해주세요! 반드시 재귀함수로 구현해야 합니다.

// 힌트

// 재귀함수의 원리는? => 함수 자신을 반복하는 것 

// 아래의 문제라면 solution안에서 다시 solution 함수를 호출하는 것이죠. 어떻게? n의 값을 바꿔서.

// 계속 자신을 호출하면 무한루프에 빠지게 되지 않을까요? 맞습니다!

// 그렇기 때문에 항상 재귀함수가 멈추는 구간을 정해줘야 합니다. n을 하나씩 줄여나가며 더해주고 n이 0일때 멈춰주면 되겠죠?

// solution(10) == solution(9) + 10

// solution(9) == solutin(8) + 9 이므로 

//solution(10) == 10 + 9 + solution(8) 이겠죠? solution(8)도 곧 8 + solution(7)이므로 결국은

// solution(10) == 10 + 9 + 8 + ... + 1 로 만들 수 있을겁니다.

function solution(n){

}

console.log(solution(10) === 55 )
console.log(solution(100)  === 5050)
console.log(solution(1000) === 500500 )
console.log(solution(10000) === 50005000 )
console.log(solution(123) === 7626 )
console.log(solution(456)  === 104196 )