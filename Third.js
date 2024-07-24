function solution(S) {
  const stack = [];
  const operations = S.split(" ");

  for (const op of operations) {
    if (op === "POP") {
      if (stack.length === 0) return -1;
      stack.pop();
    } else if (op === "DUP") {
      if (stack.length === 0) return -1;
      stack.push(stack[stack.length - 1]);
    } else if (op === "+") {
      if (stack.length < 2) return -1;
      const a = stack.pop();
      const b = stack.pop();
      if (a > Number.MAX_SAFE_INTEGER - b || a + b >= Math.pow(2, 20))
        return -1; // check for overflow
      stack.push(a + b);
    } else if (op === "-") {
      if (stack.length < 2) return -1;
      const a = stack.pop();
      const b = stack.pop();
      if (a < b || a - b < 0) return -1; // underflow would happen if b>a
      stack.push(a - b);
    } else {
      // the op should be a numbe
      const num = parseInt(op, 10);
      if (isNaN(num) || num < 0 || num >= Math.pow(2, 20)) return -1; // Ensure valid numbe
      stack.push(num);
    }

    // check if stack length exceeds 20 num
    if (stack.length > 20) return -1;
  }

  if (stack.length === 0) return -1;

  return stack[stack.length - 1];
}

//test
console.log(solution("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21")); 
console.log(solution("4 5 6 - 7 +")); 
console.log(solution("13 DUP 4 POP 5 DUP + DUP + -")); 
console.log(solution("5 6 + -")); 
console.log(solution("3 DUP 5 - -")); 
console.log(solution("1048575 DUP +")); 
