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
- Cards aren't used again --used card array?
- Repeat for 26 turns
- At end of game, console.log---Player 1 score, PLayer 2 score
    -  highest score = Player 1 Score vs Player 2 Score
    -  `Player ${highest score} is the winner.`
*/

class Card {
    constructor(suit, rankValue, faceValue) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.rank = rankValue;
    }
}

function createDeck() {
    let rankValue = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    let faceValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const myDeck = []; 

    for (let i=0; i<=rankValue.length - 1; i++) {
        myDeck.push(new Card ("Hearts", rankValue[i], faceValue[i]));
    }

    for (let i=0; i<=rankValue.length - 1; i++) {
        myDeck.push(new Card ("Spades", rankValue[i], faceValue[i]));
    }

    for (let i=0; i<=rankValue.length - 1; i++) {
        myDeck.push(new Card ("Diamonds", rankValue[i], faceValue[i]));
    }

    for (let i=0; i<=rankValue.length - 1; i++) {
        myDeck.push(new Card ("Clubs", rankValue[i], faceValue[i]));
    }

    console.log(myDeck);
    return myDeck;
}

class Players {
    constructor(name, score) {
        this.player = name;
        this.score = score;
    }
}

var player1 = new Players(1, 0);
var player2 = new Players(2, 0);

var player1Hand = [];
var player2Hand = [];

//If i can't get things to shuffle, manually go in and put them in different order manually.
class Deck {
    constructor() {
        this.deck = createDeck();
    }
    shuffleCards() {
        for(let i=0; i<5; i++) {
            this.deck.sort(() => {
                return Math.random() - 0.5;
            });
        }
    }
}

const myDeck = new Deck();
myDeck.shuffleCards();


function dealCards () {
    for (i=0; i<26; i++) {
        const card = myDeck.deck.pop();
        player1Hand.push(card);
       // myDeck.deck.pop(hopes dreams);
       // myDeck.deck.pop(player2Hand.push());
       player2Hand.push(myDeck.deck.pop());
    }
}

function gamePlay() {
    for (i=0; i<26; i++) {
        let player1Card = player1Hand.pop();
        let player2Card = player2Hand.pop();
        console.log(player1Hand)
        console.log(player1Card.faceValue, player2Card.faceValue);
        if(player1Card.faceValue > player2Card.faceValue) {
            player1.score = player1.score + 1;
        }else if (player2Card.faceValue > player1Card.faceValue) {
            player2.score = player2.score + 1;
        } console.log(player1.score, player2.score);
    }
}

function gameEndMessage() {
    if (player1.score > player2.score) {
        console.log("Player 1 is the winner!");
    } else if(player1.score < player2.score) {
        console.log("Player 2 is the winner!");
    } else {
        console.log("It was a tie. Neither player won.");
    }
}

dealCards();

gamePlay ();

gameEndMessage();
