function valid(str){
    let cnt = 0;

    for(let x of str){
    if(x.search(/[a-z]/g) >= 0){
        cnt++;
    }
    
}
if(cnt === 2){
      return str;
  }
    // let cnt = 0;
    // for(let x of str){
    //     if((x.charCodeAt(x) >= 65) && x.charCodeAt(x)<=122){
    //         cnt++;
    //     }
    // }
    // if(cnt === 2){
    //     return str;
    // }
}

function solution(str1, str2) {
  let answer = 0;
  let idx ="";
  let ar1 = [];
  let ar2 = [];

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

for(let i  = 0; i < str1.length; i++){
    idx = str1[i]+str1[i+1];
    idx = valid(idx);
    if(idx !== undefined) {
        ar1.push(idx);
    }     
}
console.log(ar1);

for (let i = 0; i < str2.length; i++) {
    idx = str2[i] + str2[i + 1];
    idx = valid(idx);
    if (idx !== undefined) {
    ar2.push(idx);
    }
}

ar1.sort();
ar2.sort();

let a = [];
let b = [];

for(let i = 0; i < ar2.length; i++){
    if (ar1.indexOf(ar2[i]) >= 0){
        a.push(ar1.splice(ar1.indexOf(ar2[i]),1))
    }
    b.push(ar2[i]);
}

for (let i = 0; i < ar1.length; i++){
    b.push(ar1[i]);
}

if (b.length === 0) return 65536;
if (a.length === 0) return 0;

  answer = Math.floor((a.length / b.length)* 65536);
  return answer;
}


let str1 = "aa1+aa2";
let str2 = "AAAA12";

console.log(solution(str1,str2));

//자카드 유사도 : 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
//공집합은 1로 처리
//1. str1, str2 모두 소문자 처리 => toLowerCase();
//2. valid로 문자열만 처리