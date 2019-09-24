const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profiler = function(obj) {
  return `Hi my name is ${obj.name}. I like to ${obj.activity}. I like to eat ${obj.favFood}.`;
};

let profile = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  profile['name'] = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    profile['activity'] = answer;
    rl.question('What\'s your favourite food? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      profile['favFood'] = answer;
      console.log(profiler(profile));
    rl.close();
    })
  });
});

