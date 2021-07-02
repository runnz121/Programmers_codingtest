function solution(nums) {
  let answer = 0;
  let ar1 = [];
  let max = Math.ceil(nums.length/2);

  const result = nums.reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) +1);
      return acc;
  }, new Map());

  for(let [key,value] of result.entries()){
      ar1.push(key);
  }
  answer = ar1.length;
  if(answer >= max){
      answer = max;
  }

  return answer;
}

let nums = [3, 1, 2, 3];//2
//let nums = [3, 3, 3, 2, 2, 2];//2
//let nums = [3, 3, 3, 2, 2, 4];//3
console.log(solution(nums));
