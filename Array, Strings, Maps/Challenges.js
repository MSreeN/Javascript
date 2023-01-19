"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and
// 'players2')
const players1 = [...game.players[0]];
// console.log(players1);
const players2 = [...game.players[1]];

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
const [gk, ...fieldPlayers] = game.players[0];
// console.log(gk, fieldPlayers);
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...game.players[0], "Thiago", "Coutinho", " Peristic"];
// console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
const { team1, x, team2 } = game.odds;
// console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
function printGoals(...playerNames) {
  playerNames.forEach((element) => {
    //  console.log(element);
  });
  // console.log(playerNames.length);
}
// printGoals(...game.players[0], ...game.players[1])
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// console.log(team1<team2? 'team1 going to win':'team2 going to win');

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
for (const [index, element] of game.scored.entries()) {
  // console.log(`Goal ${index+1}: ${element}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
let odd = 0,
  avg = 0;
for (const value of Object.values(game.odds)) {
  avg += value;
}
avg /= Object.values(game.odds).length;
const ent = Object.values(game.odds);
// console.log(avg);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
//  Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
for (const [key, value] of Object.entries(game.odds)) {
  // console.log(`Odd of Victory ${game[key] ?? "draw"}: ${value}`);
}
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

let scorers = {};
for (const player of Object.values(game.scored)) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// console.log(scorers);

///////////////Challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no
//   duplicates)
const events = [...new Set(gameEvents.values())];
// console.log(events);
//   2. After the game has finished, is was found that the yellow card from minute 64
//   was unfair. So remove this event from the game events log.
gameEvents.delete(64);
// console.log(gameEvents);
//   3. Compute and log the following string to the console: "An event happened, on
//   average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(`An event happened, on average, every ${90/[...gameEvents.keys()].length} minutes`);
// console.log(...gameEvents.keys());
//   4. Loop over 'gameEvents' and log each element to the console, marking
//   whether it's in the first half or second half (after 45 min) of the game, like this:
//   [FIRST HALF] 17: ⚽ GOAL

for (const [key, value] of gameEvents.entries()) {
  // console.log(key< 45? `[FIRST HALF] ${key}: ${value}`: `[SECOND HALF] ${key}: ${value}`);
}

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userAnswer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    // 1.2. Based on the input number, update the 'answers' array property. For
    // example, if the option is 3, increase the value at position 3 of the array by
    // 1. Make sure to check if the input is a number and if the number makes
    // sense (e.g. answer 52 wouldn't make sense, right?)
    typeof userAnswer === "number" &&
      userAnswer < this.answers.length &&
      this.answers[userAnswer]++;
    this.displayResults();
  },
  // 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
displayResults(type = "array"){
  if(type === "array"){
    console.log(this.answers);
  }else if(type === "string"){
    console.log(`Poll results are ${this.answers.join(", ")}`);
  }
}
};
// 2. Call this method whenever the user clicks the "Answer poll" button.
const registerAnswer = poll.registerNewAnswer.bind(poll);
document.querySelector(".poll").addEventListener("click", registerAnswer);
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.



// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?

poll.displayResults.call({answers:[5, 2, 3]})
