function solution(n) {
  let answer = "";
  let ans1 ="";
  let ar1 = [4,1,2];
  let ans = [];

  function re(n){
      if (n <= 0) {
        for (let x of ans) {
          ans1 += x;
        }
        answer = ans1;
        return;
      }

       if (n % 3 === 0) {
         ans.unshift(ar1[0]);
         n = Math.floor(n / 3);
         n = n - 1;
         re(n);
       } else {
         ans.unshift(ar1[n % 3]);
         re(Math.floor(n / 3));
       }
       console.log(ans);
  }
  re(n);
  return answer;
}

//let n = 1; //1
//let n = 10; //41
let n = 12; //44
console.log(solution(n));

//몫-1 = 나머지가 0인 경우
//그리고 몫, 나머지는 인덱스로 본다


function solution(n) {
  var Baseto = [4, 1, 2];
  var ternary = 0;
  var tern = 1;
  var answer = "";
  while (n) {
    ternary += tern * Baseto[n % 3];
    if (n % 3 == 0) n = parseInt(n / 3) - 1;
    else n = parseInt(n / 3);
    tern *= 10;
  }
  answer = String(ternary);
  return answer;
}