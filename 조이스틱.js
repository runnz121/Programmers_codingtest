function valid(arr){
    let ar1 =[];
    for(let x of arr){
        if(x === 0){
            ar1.push(0)
        }else{
            ar1.push(1);
        }
    }
    let i = 0; 
    let len = ar1.length;
    while(i < ar1.length){
        ar1[i] = 0;  
     let j = ar1.indexOf(1);      
        if(i + len - j < len - i - 1){
            return i + len - j+i;
        }
          i++;        
    }   
 return len - 1;   
}
function solution(name) {
  let answer = 0;
  let strarr = [];
  let sum = 0;
  let str;

for (let x of name) {
    str = x.charCodeAt(x)-65;
    if(str > 12){
        str = 26-str;
    }
    strarr.push(str);
}
answer = strarr.reduce((acc,cur) => {return acc += cur},0); // 배열 누적합
sum = valid(strarr);
answer = answer + sum;
return answer;
}

let name = "JAN";
//let name = "JEROEN";
console.log(solution(name));