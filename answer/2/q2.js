function sol2(men, women, k){
    let answer = 0; 
    let arr = []
    for(let i = 0; i < men.length; i++){
        arr.push(Math.abs(men[i] - women[i]))
    }
    arr.sort((a,b) => {
        return a-b
    })
    answer = arr[k-1]
    return answer;
}

console.log(sol2([170, 165,177,183],[160,172,153,167], 3) === 16);
console.log(sol2([180, 180,150,175],[154,179,167,164], 2) === 11);
console.log(sol2([165,185,176,188,176,172,177],[155,169,167,154,165,182,172], 5) === 11);
console.log(sol2([167,170,172,175,175,175,175,175,165,180],
            [184,179,177,184,154,162,158,170,165,158], 7) === 17);