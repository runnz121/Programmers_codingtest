function solution(info, query) {
    let answer = [];
    let lang = ["cpp", "java", "python"];
    let job = ["backend","frontend"];
    let car = ["junior","senior"];
    let food =["chicken","pizza"];
    let cnt = 0;
    
    let query1 = "";
    
    for (let x of query){
        query1 = x.split("and")
    }
    console.log(query1);
    
    return answer;
}

let info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

let query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution(info, query));