//전설의 용사

//JS아일랜드에 온 당신을 환영합니다! 당신의 현 레벨은 1인데요, 앞으로 험난한 길이 예상됩니다.

//당신은 레벨을 올려 하루라도 빨리 마왕에게 붙잡힌 공주를 구해야합니다!

//레벨을 올리기 위해서는 몬스터들을 사냥하고 경험치를 얻어야 하는데요, 어떤 방식으로 던전을 돌아야 할지 계획을 세워봅시다.

//문제 

//적정 레벨 순으로 정렬된 던전 arr이 주어집니다. 공주를 구한 후 당신의 레벨을 반환합니다.

//조건

// 1. 당신의 레벨이 던전의 적정 레벨보다 높거나 같아야 입장할 수 있습니다.

// 2. 던전을 한 번 클리어 할 때마다 당신은 레벨업하며 반드시 다음 던전으로 향해야 합니다.

// 3. 당신의 레벨이 던전의 적정 레벨보다 낮다면 당신은 첫 번째 던전부터 다시 클리어해야 합니다.

// 4. 마지막 던전을 클리어하면 당신을 공주를 구할 수 있습니다!

// 5. 첫 번째 던전의 적정레벨은 반드시 1입니다.

//예시

// 던전이 [1,3,5]이라면 

// 1. 당신의 현 레벨은 1이고 적정레벨이 1인 던전에 입장이 가능하므로 던전을 클리어 합니다.

// 2. 당신의 현 레벨은 2이고 적정레벨이 1인 던전을 클리어 해 적정레벨이 3인 던전을 향해야 하지만 
// 당신의 레벨이 던전의 적정레벨보다 낮으므로 다시 적정레벨이 1인 던전으로 향합니다.

// 3. 당신의 현 레벨은 2이고 적정레벨이 1인 던전에 입장이 가능하므로 던전을 클리어 합니다.

// 4. 당신의 현 레벨은 3이고 적정레벨이 1인 던전을 클리어 해 적정레벨이 3인 던전을 향해야 하므로 
// 적정레벨이 3인 던전을 클리어 합니다.

// 5. 당신의 현 레벨은 4이고 적정레벨이 3인 던전을 클리어 해 적정레벨이 5인 던전을 향해야 하지만
// 당신의 레벨이 던전의 적정 레벨보다 낮으므로 다시 적정레벨이 1인 던전으로 향합니다.

// 6. 당신의 현 레벨은 4이고 적정레벨이 1인 던전을 클리어 해 5, 그 다음 적정레벨이 3인 던전을 클리어 해 
// 레벨은 6이되고 적정레벨이 5인 던전을 입장할 수 있으므로 적정레벨이 5인 던전을 클리어 합니다.

// 당신은 공주를 구해냈고 당신의 현재레벨은 7이므로 7을 반환합니다.

function solution4 (arr){
    let answer = 1;
    return answer;

    
}

console.log(solution4([1,4,7,8]) === 9)
console.log(solution4([1,5,10,15]) === 18)
console.log(solution4([1,2,9,21]) === 23)
console.log(solution4([1,100,200,300,400,500,600,700]) === 707)
console.log(solution4([1,6,20,34,78,80]) === 81)
