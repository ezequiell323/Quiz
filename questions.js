var score = 0
var questions = [
  {
    title: "Whats the capital of Florida",
    choices: ["Montpelier","Pierre","Albany","Tallahassee"],
    answer: "Tallahassee"
  },
  {
    title: "Whats the capital of New York",
    choices: ["Albany","Dover","Miami","Frankfort"],
    answer: "Albany"
  },
  {
    title: "Whats the capital of Idaho",
    choices: ["Concord","Carson City","Boise","Lincoln"],
    answer: "Boise"
  },
  {
    title: "Whats the capital of Alaska",
    choices: ["Montgomery","Phoenix","Juneau","Little Rock"],
    answer: "Juneau"
  },
  {
    title: "Whats the capital of Georgia",
    choices: ["Madison","Atlanta","Olympia","Richmond"],
    answer: "Atlanta"
  },
]




function pageLoad(){
  document.getElementById("qOne").innerText=questions[0].title;
  document.getElementById("qTwo").innerText=questions[1].title;
  document.getElementById("qThree").innerText=questions[2].title;
  document.getElementById("qFour").innerText=questions[3].title;
  document.getElementById("qFive").innerText=questions[4].title;
//a1
  document.getElementById("montpelier").innerText=questions[0].choices[0];
  document.getElementById("pierre").innerText=questions[0].choices[1];
  document.getElementById("albany").innerText=questions[0].choices[2];
  document.getElementById("tallahassee").innerText=questions[0].choices[3];
//a2
  document.getElementById("jackson").innerText=questions[1].choices[0];
  document.getElementById("dover").innerText=questions[1].choices[1];
  document.getElementById("miami").innerText=questions[1].choices[2];
  document.getElementById("frankfort").innerText=questions[1].choices[3];
//a3
  document.getElementById("concord").innerText=questions[2].choices[0];
  document.getElementById("carsonCity").innerText=questions[2].choices[1];
  document.getElementById("boise").innerText=questions[2].choices[2];
  document.getElementById("lincoln").innerText=questions[2].choices[3];
//a4
  document.getElementById("montgomery").innerText=questions[3].choices[0];
  document.getElementById("phoenix").innerText=questions[3].choices[1];
  document.getElementById("juneau").innerText=questions[3].choices[2];
  document.getElementById("litteRock").innerText=questions[3].choices[3];
//a5
  document.getElementById("madison").innerText=questions[4].choices[0];
  document.getElementById("atlanta").innerText=questions[4].choices[1];
  document.getElementById("olympia").innerText=questions[4].choices[2];
  document.getElementById("richmond").innerText=questions[4].choices[3];

  var count = 50;
  var counter = setInterval(timer, 1000);
  
  function timer() {
    count=count-1;
    if (count <=0)
    {
      clearInterval(counter);
      alert("You're out of time!");
      return;
    }
    document.getElementById("timeUpdate").innerText=count;
  
  }

}


//q1
function correctFunction(){
  document.getElementById("userAnswer").innerText="Correct";
  document.getElementById("montpelier").disabled=true;
  document.getElementById("pierre").disabled =true;
  document.getElementById("albany").disabled =true;
  document.getElementById("tallahassee").disabled =true;
  score++;
  document.getElementById("score").innerHTML=score;
}

function wrongFunction(){
  document.getElementById("userAnswer").innerText="Wrong";
  document.getElementById("montpelier").disabled=true;
  document.getElementById("pierre").disabled =true;
  document.getElementById("albany").disabled =true;
  document.getElementById("tallahassee").disabled =true;
}
//q2
function correctFunction2(){
  document.getElementById("userAnswer2").innerText="Correct";
  document.getElementById("albany").disabled=true;
  document.getElementById("dover").disabled =true;
  document.getElementById("miami").disabled =true;
  document.getElementById("frankfort").disabled =true;
  score++;
  document.getElementById("score").innerHTML=score;
}
function wrongFunction2(){
  document.getElementById("userAnswer2").innerText="Wrong";
  document.getElementById("albany").disabled=true;
  document.getElementById("dover").disabled =true;
  document.getElementById("miami").disabled =true;
  document.getElementById("frankfort").disabled =true;
}
//q3
function correctFunction3(){
  document.getElementById("userAnswer3").innerText="Correct";
  document.getElementById("concord").disabled=true;
  document.getElementById("carson City").disabled =true;
  document.getElementById("boise").disabled =true;
  document.getElementById("lincoln").disabled =true;
  score++;
  document.getElementById("score").innerHTML=score;
}
function wrongFunction3(){
  document.getElementById("userAnswer3").innerText="Wrong";
  document.getElementById("concord").disabled=true;
  document.getElementById("carson City").disabled =true;
  document.getElementById("boise").disabled =true;
  document.getElementById("lincoln").disabled =true;
}
//q4
function correctFunction4(){
  document.getElementById("userAnswer4").innerText="Correct";
  score++;
  document.getElementById("montgomery").disabled=true;
  document.getElementById("phoenix").disabled =true;
  document.getElementById("juneau").disabled =true;
  document.getElementById("Little Rock").disabled =true;
  score++;
  document.getElementById("score").innerHTML=score;
}
function wrongFunction4(){
  document.getElementById("userAnswer4").innerText="Wrong";
  document.getElementById("montgomery").disabled=true;
  document.getElementById("phoenix").disabled =true;
  document.getElementById("juneau").disabled =true;
  document.getElementById("Little Rock").disabled =true;
}
//5
function correctFunction5(){
  document.getElementById("userAnswer5").innerText="Correct";
  score++;
  
  document.getElementById("madison").disabled=true;
  document.getElementById("atlanta").disabled =true;
  document.getElementById("olympia").disabled =true;
  document.getElementById("richmond").disabled =true;
  score++;
}
function wrongFunction5(){
  document.getElementById("userAnswer5").innerText="Wrong";
  document.getElementById("madison").disabled=true;
  document.getElementById("atlanta").disabled =true;
  document.getElementById("olympia").disabled =true;
  document.getElementById("richmond").disabled =true;
}


