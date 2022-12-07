function solution(inputArray) {
  const answer = inputArray
    .map((num) => num ** 2)
    .filter((num) => num % 2 !== 0)
    .reduce((acc, cur, idx) => (acc += cur), 0);

  return answer;
}

exports.solution = solution;
