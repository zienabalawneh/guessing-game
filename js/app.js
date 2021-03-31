'use strict';

/*function answerQuestion(answer) {

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



}*/

let correctAnswer = 0;

let userName = prompt("Please, what is your name?");
function Qusername(userName) {
  while (!userName) {


    userName = prompt("Please, what is your name?")
  }
  console.log('Hello ' + userName + ', I am really pleased with you');

  alert('Hello ' + userName + ", I am really pleased with you");
  
  document.write("<center><h1>welcome : " + userName + "</h1></center>");

  document.write("<center><p>Hello " + userName + ", I am really pleased with you</p></center>");

  document.write('<center><img src="https://i.pinimg.com/originals/0d/a5/cb/0da5cbca5d728a789100439958f50235.gif"alt="hi" style="width=500px;"></center>');
}

Qusername(userName);






//**************************************************************************************************

function Q1() {
  var a1 = prompt("You have to guess, do you think I like trekking?").toUpperCase();
  //answerQuestion(a1);


  while (a1 !== 'YES' && a1 !== 'Y' && a1 !== 'NO' && a1 !== 'N') {

    a1 = prompt("You have to guess, do you think I like trekking?").toUpperCase();
  }


  switch (a1.toUpperCase()) {
    case 'YES':
    case 'Y':
      console.log(' Oh, your answer, ', a1 + " , that's cool");
      alert(' Oh, your answer, ' + a1 + " , that's cool");
      correctAnswer++;
      break;

    case 'NO':
    case 'N':
      console.log('your answer, ', a1 + " , better luck");
      alert(' Your answer is, ' + a1 + " , better luck");
      break;

  }
}
Q1();



//*********************************************************************************************************
function Q2() {
  var a2 = prompt("Do you think I prefer to spend the trip with the family?").toUpperCase();;
  //answerQuestion(a2);

  while (a2 !== 'YES' && a2 !== 'Y' && a2 !== 'NO' && a2 !== 'N') {

    a2 = prompt("Do you think I prefer to spend the trip with the family?").toUpperCase();
  }

  switch (a2.toUpperCase()) {
    case 'YES':
    case 'Y':
      console.log(' Oh, your answer, ' + a2 + " , that's cool");
      alert(' Oh, your answer, ' + a2 + " , that's cool");
      correctAnswer++;
      break;

    case 'NO':
    case 'N':
      console.log(' Your answer is, ' + a2 + " , better luck");
      alert(' Your answer is, ' + a2 + " , better luck");
      break;

  }
}

Q2();


//*********************************************************************************************************
function Q3() {
  var a3 = prompt("Does I like spring and summer?").toUpperCase();;
  //answerQuestion(a3);

  while (a3 !== 'YES' && a3 !== 'Y' && a3 !== 'NO' && a3 !== 'N') {

    a3 = prompt("Does I like spring and summer?").toUpperCase();
  }

  switch (a3.toUpperCase()) {
    case 'YES':
    case 'Y':
      console.log(' Oh, your answer, ' + a3 + " ,its false, i does not like spring and summer ");
      alert(' Oh, your answer, ' + a3 + " ,its false, i does not like spring and summer ");

      break;

    case 'NO':
    case 'N':
      console.log(' Your answer is, ' + a3 + " ,that's cool, i does not like spring and summer");
      alert(' Your answer is, ' + a3 + " ,that's cool, i does not like spring and summer");
      correctAnswer++;
      break;

  }
}

Q3();




//*********************************************************************************************************
function Q4() {
  var a4 = prompt("Do I love swimming?").toUpperCase();;
  //answerQuestion(a4);

  while (a4 !== 'YES' && a4 !== 'Y' && a4 !== 'NO' && a4 !== 'N') {

    a4 = prompt("Do I love swimming?").toUpperCase();
  }

  switch (a4.toUpperCase()) {
    case 'YES':
    case 'Y':
      console.log(' Oh, your answer, ' + a4 + " ,that's cool,I love swimming so much ");
      alert(' Oh, your answer, ' + a4 + " ,that's cool,I love swimming so much ");
      correctAnswer++;
      break;

    case 'NO':
    case 'N':
      console.log(' Your answer is, ' + a4 + " better luck,I love swimming so much");
      alert(' Your answer is, ' + a4 + " better luck,I love swimming so much");
      break;

  }
}

Q4();



//*********************************************************************************************************
/*

var a5 = prompt("Do you expect that I am a lazy person and tend to be lethargic?").toUpperCase();;
//answerQuestion(a5);

while(a5!=='YES'&&a5!=='Y'&&a5!=='NO'&&a5!=='N'){

    a5 = prompt("Do you expect that I am a lazy person and tend to be lethargic?").toUpperCase();}

    switch (a4.toUpperCase()) {
        case 'YES':
        case 'Y':
             console.log(' Oh, your answer,' + a5 + ",its false, I love sleeping but I am not a lazy person");
            alert(' Oh, your answer,' + a5 + ",its false, I love sleeping but I am not a lazy person");
            break;

        case 'NO':
        case 'N':
            console.log(' Your answer is,' + a5 + ",that's cool, I love sleeping but I am not a lazy person");
            alert(' Your answer is,' + a5 + ",that's cool, I love sleeping but I am not a lazy person");
             correctAnswer++;
            break;

    }







console.log(correctAnswer);






let sleephours;
let attempt = 4;

for (let i = 0; i < 4; i++) {


    sleephours = Number(prompt('How many hours do I sleep at night??'));

  if (sleephours === 7) {
    correctAnswer++;
    alert('it is a correct answer');
    break;
  }



  else if (sleephours > 7) {
    alert('it is more than what you entered, try again');
    attempt--;

  }
  else if (sleephours < 7) {
    alert('it is less than what you entered, try again');
    attempt--;
  }


  if (attempt === 0) {
    alert('the correct answer is 7 hours');

  }



}



let favfood ;

let attempt2=6;

let arr=['grills','burger','pizza'];


favfood = prompt('What do I prefer to eat on trips? Guess that').toLowerCase();

outerloop1 :for (let z = 0; z <6; z++) {
console.log(z);
  for(let n=0;n<arr.length;n++){

    if (favfood ==='grills'||favfood ==='burger'||favfood ==='pizza') {

      correctAnswer++;
      alert('yes it is one of my favorite food');

      break outerloop1;
    }

    else if (favfood !=='grills'||favfood !=='burger'||favfood !=='pizza') {
      alert('it is not one of my favorite food !');
      attempt2 --;
      favfood = prompt('What do I prefer to eat on trips ?').toLowerCase();

    }

    if (attempt2 === 0) {
      alert('you do not have extra attempt');
      break;
    }
    break;
  }
}
for (let m=0;m<arr.length;m++){
    alert('the aswers was ' + arr[m]);}

  alert('ok ' + userName + ' you answered ' + correctAnswer + ' question correctly');
*/