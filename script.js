var containerEle = document.body.querySelector(".container");

var total = 0;

var number1 = Number(prompt("What is the first Number?"));

if (isNaN(number1) == false) {
  var number2 = Number(prompt("What is the second Number?"));
}
  if (isNaN(number2) == false) {
  var operation = prompt("Choose your operation: / + * - ");
}
    if (operation == "/") {
    total = number1 / number2;
    containerEle.innerHTML = "The answer is" +  total;
}   
    else if (operation == "*") {
    total = number1 * number2;
    containerEle.innerHTML = "The answer is" +  total;
    }
    else if (operation == "+") {
    total = number1 + number2;
    containerEle.innerHTML = "The answer is" +  total;
    }
    else if (operation == "-") {
    total = number1 - number2;
    containerEle.innerHTML = "The answer is" +  total;
    }
    else {
      containerEle.innerHTML = "Wrong do it again and READ!";
    }