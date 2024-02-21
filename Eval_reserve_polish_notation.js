if(tokens.length === 0) {
    return 0
}
let stack = []
for(let i = 0; i < tokens.length; i++) {
    if(tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
      stack.push(tokens[i])
  } else {
          const numOne = parseInt(stack.pop())
      const numTwo = parseInt(stack.pop())
      let res = 0
      switch(tokens[i]){
      case "+":
          res = numOne+numTwo;
        stack.push(res);
        break;
      case "-":
        res = numOne-numTwo;
        stack.push(res);
        break;
      case "*":
          res = numOne*numTwo;
        stack.push(res);
        break;
      case "/":
        res = parseInt(numTwo/numOne);
        stack.push(res);
        break;
      }
  }
  
}
return stack[0]