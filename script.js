//---1---Random Number Generation in Javascript: Building a Love Calculator

        //---1---
let n = Math.random();
n = n* 6;
n = Math.floor(n) + 1;
console.log(n);

        //---2---
prompt("Your name?");
prompt("His name");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

alert("Your love score is " + loveScore + "%");

//---2---Control Statements: Using If-Else Conditionals & Logic
prompt("Your name?");
prompt("His name");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "% " + "You love each other like Jack loves Rose.");
} else {
    alert("Your love score is " + loveScore + "%")
}    