var message = ['This is a Test!', 'This is not a test!', 'This was a test!']

const output = (text) => {
  
    var randomnr = [Math.floor(Math.random()*text.length)];


return text[randomnr];
};

console.log(output(message));
