function solution(s) {
  let answer = 0;
  let arr = [];
  let carr = [];
  let map = new Map();
  let min = Number.MAX_SAFE_INTEGER;

  for(let x of s){
    arr.push(x);
  }

  let result = arr.reduce((acc, curr) => {
    acc.set(curr, (acc.get(curr) || 0) +1 );
    return acc;
  }, new Map());

  console.log(result);




  




  return answer;
}

let s = "aabbaccc";//7
//let s = "ababcdcdababcdcd";//9
//let s = "abcabcabcabcdededededede";//14

console.log(solution(s));