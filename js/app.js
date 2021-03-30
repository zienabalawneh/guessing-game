'use strict';

function answerQuestion(answer) {

    switch (answer.toUpperCase()) {
        case 'YES':
        case 'Y':
            // console.log(' Oh, your answer,' ,answer);
            alert(' Oh, your answer,' + answer + ", that's cool");
            break;

        case 'NO':
        case 'N':
            // console.log('your answer,' ,answer);
            alert(' Your answer is,' + answer + ", better luck");
            break;
        default:
            alert('keep the answer to \'YES\' or \'NO\' or \'Y\' or \'N\' only please')



    }



}
var ans = prompt("Please, what is your name?");


var a1 = prompt("You have to guess, do you think I like trekking?");

answerQuestion(a1);

var a2 = prompt("Do you think I prefer to spend the trip with the family?");

answerQuestion(a2);
var a3 = prompt("Do you like spring and summer?");

answerQuestion(a3);
var a4 = prompt("Do you expect that I love spring and summer?");


answerQuestion(a4);
var a5 = prompt("Do you expect that I am a lazy person and tend to be lethargic?");


answerQuestion(a5);



document.write("welcome " + ans + "<br> <br> <br><br>");

document.write("<br><center>Hello " + ans + ", I am really pleased with you</center>");

document.write('<center><img src="https://i.pinimg.com/originals/0d/a5/cb/0da5cbca5d728a789100439958f50235.gif"alt="hi"></center>');

