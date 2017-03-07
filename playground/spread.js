var groupA = ['mathew', 'pierre', 'benoit'];
var groupB = ['Aurelie', 'Carole', 'Valerie'];

var mast = [...groupA, ...groupB];

console.log(mast);

var person1 = ['Andrew', 25];
var person2 = ['Benoit', 36];

function whatever(name, age){
  return console.log('Hi ' + name + ' your age is ' + age);
}
whatever(...person2);

var final = [...groupA, ...groupB];

  final.forEach(function (name) {
    console.log('Hi ' + name);
  });
