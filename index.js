import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function teamName (data, year, stge){
    const newArray = data.filter((game) => {
      return game.Year === year && game.Stage === stge;
    });
    console.log (`
    Home Team Name: ${newArray[0]['Home Team Name']}. 
    Away Team Name: ${newArray[0]['Away Team Name']}. 
    Home Team Goals: ${newArray[0]['Home Team Goals']}. 
    Away Team Goals: ${newArray[0]['Away Team Goals']}. 
    Win Conditions: ${newArray[0]['Win conditions']}.`);
    }

teamName(fifaData, 2014, 'Final');

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data1) {
    const arrayFinal = data1.filter((final) => {
    return final.Stage === 'Final';
  });
  return arrayFinal;}

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */


function getYears(callback, data1) {
    let arrayFinal2 = callback(data1);
    const years = arrayFinal2.map((year) => {
  return {'Year': year.Year};
});
return years;
    }
    
 getYears(getFinals, fifaData);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

 function getWinners(callback, data1) {
    let winners = [];
    let arrayFinals = callback(data1);
    // console.log (arrayFinals)
    for (let i=0; i < arrayFinals.length; i++){
        if (arrayFinals[i]['Home Team Goals'] > arrayFinals[i]['Away Team Goals']) {
            winners.push (arrayFinals[i]['Home Team Name']);
        } else {
            winners.push (arrayFinals[i]['Away Team Name'])
        }
    }
    return winners;
 };

 getWinners(getFinals, fifaData);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback2, callback3, callback1, data1) {
    let arrayFinals = callback2(callback1, data1);
    let years1 = callback3(callback1, data1);
    for (let i = 0; i < arrayFinals.length; i++){
    let country = arrayFinals[i];
    let year = years1[i]['Year'];
    console.log (`In ${year}, ${country} won the world cup!`)
    }
};

getWinnersByYear(getWinners, getYears, getFinals, fifaData);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getWinnerInits (callback, data1){
    let winnersinits = [];
    let arrayFinals = callback(data1);
    for (let i=0; i < arrayFinals.length; i++){
        if (arrayFinals[i]['Home Team Goals'] > arrayFinals[i]['Away Team Goals']) {
            winnersinits.push (arrayFinals[i]['Home Team Initials']);
        } else {
            winnersinits.push (arrayFinals[i]['Away Team Initials'])
        }
    }
    return winnersinits;
}
getWinnerInits (getFinals, fifaData);

function getCountryWins(callback, callback2, data1, teaminits) {
    let newArray = callback(callback2, data1);
    console.log(newArray);
    let count = 0;
    newArray.forEach ((v) => (v === teaminits && count++));
    console.log(count);
};

getCountryWins(getWinnerInits, getFinals, fifaData, "BRA");

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averagehome = data.reduce((total, goals) => {return total += goals['Home Team Goals']}, 0)
    let averagehome1 = averagehome/data.length;
    console.log (averagehome1.toFixed(2));
    const averageaway = data.reduce((total, goals) => {return total += goals['Away Team Goals']}, 0)
    let averageaway1 = averageaway/data.length;
    console.log (averageaway1.toFixed(2));
};

getAverageGoals(fifaData);


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
