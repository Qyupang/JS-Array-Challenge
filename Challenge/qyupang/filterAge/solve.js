// write your codes
function solution(inputArray) {
  const answer = inputArray.filter(
    (person) => person.age >= 30 && person.age < 50
  );

  return answer;
}

exports.solution = solution;
