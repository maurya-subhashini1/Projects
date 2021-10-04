let readlineSync=require("readline-sync");
var computerMoves = ['rock', 'paper', 'scissors'];
var randomMoveOfComputer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
 
var playerName=readlineSync.question("What is your name: ")
console.log("hi "+ playerName )
console.log("choose any move in rock paper scissors")
var playerMove = readlineSync.question("Which move you want to do? ");
 
if (playerMove==randomMoveOfComputer){
    console.log("match drow")
}else if (playerMove=="rock" && randomMoveOfComputer=="paper"){
    console.log("computer won the match")
}else if(playerMove=="paper" && randomMoveOfComputer=="scissors"){
    console.log(playerMove+"won the match ")
}else if(playerMove=="scissors" && randomMoveOfComputer=="paper"){
    console.log(" computer won th match")
}else if(playerMove=="scissors" && randomMoveOfComputer=="rock"){
    console.log( playerMove+"won the match")
}else if(playerMove=="paper"&& randomMoveOfComputer=="rock"){
    console.log("computer won the match")
}else{
    console.log("nothing")
}