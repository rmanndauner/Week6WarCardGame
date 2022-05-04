/*War Card Game

Create 3 Classes : Cards, Deck, Players
Card class contains constructors : number, suit?, 
Card class needs variables of K = 13, Q = 12, J = 11, A = 1
Deck class needs constructors : number of cards
Players class needs constructors : Player 1 vs 2, Score

Create an array of cards [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K]
Question : Are the suits necessary? They aren't in the card game.

Create functions : 
Shuffle Cards - how to shuffle an array
Deal Cards - divide an array in two, how to split between two open arrays
Play cards - console.log 2 cards
Compare Cards - if statement, need to compare a range of cards
Score Points

Repeat - for loop necessary
i = turns
for (i = 0; i <+= 26, i++);

Order of game
-Shuffle cards
- Deal 26 cards to each player
- Each player plays 1 card (console.log)
- Compare cards
    K > Q-A, Q> J-A, J > 10 - A, 10 > 9-A, 9 > 8-A, 8 > 7-A, 7 > 6-A, 6 > 5-A, 5 > 4-A, 4 > 3-A, 3 > 2-A, 2 > A
- Player with greater number scores 1 point
    Ties = 0 poins===
    K===K, Q===Q, J===J, 10 ===10, 9 === 9, 8===8, 7===7, 6===6, 5===5, 4===4, 3===3, 2===2, A===A
- Cards aren't used again (used card array?)
- Repeat for 26 turns
- At end of game, console.log(Player 1 score, PLayer 2 score)
    -  highest score = Player 1 Score vs Player 2 Score
    -  `Player ${highest score} is the winner.`
*/

class Cards {
    constructor(number);
    this.number = number;
}

class Players {
    constructor(name, score);
    this.name = name;
    this.score = score;
}

class Deck {
    constructor(numberOfCards);
    this.numberOfCards = cards;
}



function shuffleCards ();

function dealCards (players);

function playCards ();

function compareCards (
    
);

function scorePoints ();


