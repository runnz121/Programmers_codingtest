function solution(lottos, win_nums) {
  let answer = [];
  let cnt = 0;
  let cnt1 = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for(let k = 0; k < 6; k++){
    if(lottos[k] === 0){
        cnt1++;      
    }
  }


  for(let i = 0; i < 6; i++){
      for(let j = 0; j < 6; j++){
        if(lottos[i] === win_nums[j]){
            lottos.splice(lottos.indexOf(win_nums[j]),1);
            cnt++;
            i = -1;
            j = 0;
        }
      }
  }

  min = 6-cnt+1;
  if(min >= 7 ){
      min = 6;
  }

  answer.push(min);
  max = 6-(cnt+cnt1)+1;
    if (max >= 7) {
      max = 6;
    }
  answer.push(max);
  answer.sort((a,b) => (a-b));

  return answer;
}


//let lottos = [44, 1, 0, 0, 31, 25];
//let win_nums = [31, 10, 45, 1, 6, 19];

//  let lottos = [0, 0, 0, 0, 0, 0];
//  let win_nums = [38, 19, 20, 40, 15, 25];

// let lottos = [45, 4, 35, 20, 3, 9];
// let win_nums = [20, 9, 3, 45, 4, 35];

let lottos = [1,2,3,4,5,6];
let win_nums = [7,8,9,10,11,12];

console.log(solution(lottos, win_nums)) //[3,5];