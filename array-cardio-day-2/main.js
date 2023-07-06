// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.

const isOlderThan18 = (age) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear - age > 18 ? true : false;
};

console.log(people.some((person) => isOlderThan18(person.year)));

// Array.prototype.every() // is everyone 19 or older?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// true if callbackFn returns a truthy value for every array element. Otherwise, false.

console.log(people.every((person) => isOlderThan18(person.year)));

// Array.prototype.find()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find((comment) => comment.id === 823423).text;
console.log(comment);

// Array.prototype.findIndex()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// Find the comment with this ID
// delete the comment with the ID of 823423

const indexToDelete = comments.findIndex((comment) => comment.id === 823423);
// console.log(indexToDelete);
comments.splice(indexToDelete, 1)
console.table(comments);
