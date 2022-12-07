// write your codes
const inputArray = {
  input: ['잠', '자', '고', '싶', '다', '용가리'],
  answer: true,
};

function solution(inputArray) {
  const answer = inputArray.filter((word) => word.input.includes('용가리'));

  console.log(answer);
}

solution(inputArray);

exports.solution = solution;
