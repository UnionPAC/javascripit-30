// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2)
// output: 100 100
// age = 200
// console.log(age, age2)
// output: 200 100

// let name1 = 'geoff'
// let name2 = name1;
// console.log(name1, name2)
// output: geoff geoff
// name1 = 'andy'
// console.log(name1, name2)
// output: andy geoff

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players; // this is BAD, this is a reference, NOT a copy!

// You might think we can just do something like this:
// team[3] = "Lux";
// console.log(team);
// output: ['Wes', 'Sarah', 'Ryan', 'Lux']
// console.log(players);
// output: ['Wes', 'Sarah', 'Ryan', 'Lux']

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way (SLICE)
const team2 = players.slice();
// team2[2] = "Geoff";
// console.log(`Players: ${players}`);
// console.log(`Team 2: ${team2}`);

// or create a new array and concat the old one in (CONCAT)
const team3 = [].concat(players);
// console.log(team3)
// team3[1] = 'Steve'
// console.log(`Players: ${players}`);
// console.log(`Team 3: ${team3}`);

// or use the new ES6 (SPREAD OPERATOR)
const team4 = [...players];
// console.log(team4)
// team4[1] = 'Joel'
// console.log(`Players: ${players}`);
// console.log(`Team 3: ${team4}`)

// OR - using Array.from
const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person; // THIS IS BAD!! THIS IS A REFERENCE, NOT A COPY!!
// captain.age = 99;
// console.log(`Captain: ${JSON.stringify(captain)}`);
// console.log(`Person: ${JSON.stringify(person)}`);

// how do we take a copy instead?
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const anotherPerson = Object.assign({}, person, {name: 'Geoff', age: 27});
// console.log(JSON.stringify(anotherPerson)); // {"name":"Wes Bos","age":80}
// console.log(`Person: ${JSON.stringify(person)}`);
// console.log(`Another Person: ${JSON.stringify(anotherPerson)}`);


// We will hopefully soon see the object ...spread
const randomPerson = {...person, name: 'Nobody', age: 1000}
// console.log(JSON.stringify(randomPerson))
// console.log(JSON.stringify(person))


// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
