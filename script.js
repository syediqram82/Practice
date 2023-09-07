//

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const seta = new Map();

// seta
//   .set('name', 'Iqram')
//   .set(1, 'lalbazar')
//   .set(true, 'We are Open')
//   .set(false, 'We are closed')
//   .set('open', 11)
//   .set('close', 23);

// console.log(seta);

// const time = 8;

// console.log(seta.get(time > seta.get('open') && time > seta.get('close')));

// const question = new Map([
//   ['name', 'Iqram'],
//   ['Address', 'Rawalpora Astanpora'],
// ]);

// console.log(question);

// const question = new Map([
//   ['Question', 'What is the best Programming Language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Java Script'],
//   ['correct', 3],
//   [true, 'Correct Answer'],
//   [false, 'Wrong Answer'],
// ]);

// const answer = Number(prompt('What is the best progamming Language'));

// // console.log(question.get('correct'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} ${value}`);
// }

// if (answer === question.get('correct')) {
//   console.log(`${question.get(true)}`);
// } else {
//   console.log(`${question.get(false)}`);
// }

// console.log(question.get('correct') === answer);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const time = [...gameEvents.keys()].pop() / 2;
// console.log(time);

// for (const [key, value] of gameEvents) {
//   if (key < time) {
//     console.log(`[First Half] ${key}: ${value}`);
//   } else {
//     console.log(`[Second Half]${key}: ${value}`);
//   }
// }

// const events = new Set(gameEvents.values());

// console.log(gameEvents);

// let avg = 0;
// let totalMins = 90;
// for (const a of gameEvents.keys()) {
//   avg += a;
// }

// console.log(`An event happened, on average, every ${avg / 90} minutes`);

// const alphamale = 'Iqram muz muzamil muz';

// console.log(alphamale.replace(/muz/g, 'ul'));

// const trueUpper = [];
// const uppercase = function (name) {
//   const upper = name.split(' ');
//   for (const x of upper) {
//     trueUpper.push(x[0].toUpperCase() + x.slice(1));
//   }
//   console.log(trueUpper.join(' '));
// };
// uppercase('iqram muz zaman');
// uppercase('syed Afreen jeelani');
// //////////////////////////

// const maskC = function (num) {
//   const numb = num + '';
//   const last4 = numb.slice(-4);
//   console.log(last4.padStart(numb.length, '*'));
// };

// maskC(12345678978);

// maskC(78945612385274196);

// const str = 'Iqram';

// console.log(str.padEnd(12, '*'));
// console.log(str.concat(' muz Zaman'));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// const toUpperCase = [];
// const camelcase = function (names) {
//   const removeUnd = names.replace("_", " ");
//   const names1 = removeUnd.split(" ");
//   for (const x of names1) {
//     toUpperCase.push(x[0].replace(x[0], x[0].toUpperCase() + x.slice(1)));
//   }
//   console.log(toUpperCase.join(" "));
// };

// document.querySelector("button").addEventListener("click", camelcase());

// const totalprice = [];
// const Zameenprice = function (
//   flight,
//   passengers = 1,
//   price = 199 * passengers
// ) {
//   const obj = {
//     flight,
//     passengers,
//     price,
//   };
//   console.log(obj);
// };

// Zameenprice("AQ123", 3);
// Zameenprice("AQ123", 2, 5);

const persona = [];

const persons = function (names, address, age) {
  const person = {
    names,
    address,
    age,
  };
  persona.push(person);
};

persons("iqram", "rawakoira", 23);
persons("Afreen", "Dalgate", 23);
persons("raghvi", "delhi", 23);

persona.pop();

console.log(persona);
