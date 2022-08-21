//숫자 공장

//당신의 마을에서 오늘도 열심히 가동중인 공장이 있습니다. 

//당신은 공장에 체험학습을 가게 되었는데요, 공장의 직원이 공장작동 원리를 알려주었습니다!

//문제 배열 arr이 주어지고 공장에서 나온 결과값을 반환합니다.

//공장의 작동원리는 다음과 같습니다.

// 1. 최초의 숫자는 반드시 0입니다. 

// 2. 시작지점은 2개가 있는데 a포인트 시작지점은 0이고 b포인트 시작지점은 배열의 가장 오른쪽 자리입니다.

// 3. 배열의 a포인트 지점을 더합니다.

// 4. 배열의 b포인트 지점의 숫자가 홀수라면 더하고 짝수라면 뺍니다.

// 5. 배열의 a포인트 지점을 한 칸 오른쪽으로 옮깁니다.

// 6. 배열의 b포인트 지점은 한 칸 왼쪽으로 옮깁니다.

// 7. a포인트 지점과 b포인트 지점이 같거나 b포인트 지점이 a포인트 지점보다 왼쪽에 있다면 가동을 멈추고 결과값을 반환합니다.

// 8. 다시 3번부터 반복합니다.

// 예시

// 배열이 [1,2,3,4,5,6,7,8,9] 라면 

// 최초의 숫자는 0이고 

// a포인트 지점의 수는 1이므로 0에 1을 더합니다.

// b포인트 지점의 수는 9이고 9는 홀수이므로 1에 9를 더합니다.

// a포인트 지점은 오른쪽으로 한 칸, b포인트 지점은 왼쪽으로 한 칸 이동합니다.

// 다시 a포인트 지점의 수는 2이므로 10에 2를 더합니다.

// b포인트 지점의 수는 8이고 8은 짝수이므로 12에서 8을 뺍니다.

// 이를 반복하면 a지점의 수는 5, b지점의 수도 5가 됩니다.

// a지점과 b지점의 위치가 같으므로 5를 더하거나 빼지 않고 결과값을 반환합니다.

function solution4(arr){
    let answer = 0;
    return answer;
}

console.log(solution4([1,2,3,4,5,6,7,8,9]) === 12)
console.log(solution4([10,12,15,32,22,84,1,65,-5,-7,-2]) === 147)
console.log(solution4([-1,-2,-3,-4,-5,-6,-7,-8,-9]) === -12)
console.log(solution4([1,1,1,11,1,1,1,11,1,1])===30)
