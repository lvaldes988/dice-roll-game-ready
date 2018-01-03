//pls select the die the number in the die player 1 and plsyer 2 and all the titles in an array or nodelist
//from the dom 
var die = document.querySelector('#die');
var roll = document.querySelector('#roll');
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
var tiles = document.querySelectorAll('.tile');
var circle = document.querySelector('#winner-circle');

// game state
var player1Position = 0;
var player2Position = 0;
var turn = player1;

