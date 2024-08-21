const prompt = require(`prompt-sync`)();

let input = undefined;

while (true) {
  input  = prompt(`Please enter a natural number:`);
  input = Number(input);
  if(!isNaN(input) || input < 1)
  {
    input = Math.floor(input);
    break;
  }

  console.log(`Input was not a natural number!\n`);
}


let output = [];

for (let i = 1; i < input + 1; ++i) {
  let result = '';
  if(!Boolean(i % 3)) {
     result = result.concat(`Fizz`);
  }

  if(!Boolean(i % 5)) {
    result = result.concat(`Buzz`);
  }
  
  if(result.length == 0) {
    result = i.toString();
  }
  
  output= output.concat(result);
}

console.log(output);