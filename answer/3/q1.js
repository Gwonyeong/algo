function solution1 (arr){
    let answer = 0;

    arr.sort((a,b) => {
      if(a > b)return -1  
    })
    
    return arr[2]
}