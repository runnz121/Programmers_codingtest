function solution(numbers, target) {
  let answer = 0;

  function DFS(v, sum){
      if(v === numbers.length){
        if (target === sum) {
            answer++;
        }
      }else{
        DFS(v + 1, sum + numbers[v]);
        DFS(v + 1, sum - numbers[v]);
      }
  }
  DFS(0,0);

  return answer;
}

let numbers = [1, 1, 1, 1, 1];
let target = 3;

console.log(solution(numbers,target));

///