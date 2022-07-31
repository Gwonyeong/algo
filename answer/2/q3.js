function sol3(arr, money, month){
    answer = 0;
    arr.sort((a,b)=> {
        return a-b
    });
    let week_money = 0;
    for(let i = 0; i < month * 4; i++){ //한 달이 4주이므로 그 기간만큼 for문 돌리기
        answer += money[week_money]//용돈 받기
        
        for( let j = 0; j < arr.length; j++){
        
            if(answer - arr[j] < 0){ //j번째의 노래방을 이용할 수 없다면
                if(j === 0){//가장 싼 노래방도 이용할 수 없는 경우이므로 이번 주는 노래방을 갈 수 없음.
                    break
                }
                answer -= arr[j-1];//가진 돈으로 갈 수 있는 가장 좋은 노래방 이용하기
                break
            }
            if(j === arr.length-1){//가장 비싼 노래방을 갈 수 있다면 그 노래방을 이용하기
                answer -= arr[j];
            }
        }
        week_money++
        if(week_money >= money.length){//용돈의 배열 끝이라면 다시 0으로 초기화
            week_money = 0;
        }
    }
    return answer;
}

console.log(sol3([800,500,1100], [1000, 700], 1));
console.log(sol3([400,500], [300,200,300], 3));
console.log(sol3([900,1300,1800],[2000,500,600,1200], 5));
console.log(sol3([2000,3000], [1400], 12));