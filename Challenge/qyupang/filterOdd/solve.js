// write your codes
function solution(inputArray) {
  const answer = inputArray.filter((num) => num % 2 !== 0);

  return answer;
}

exports.solution = solution;
