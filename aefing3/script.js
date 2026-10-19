function sayHello() {
  const name = document.getElementById("nameInput").value;
  const output = document.getElementById("nameOutput");
  output.innerText = `Halló ${name}!`;
}

function checkAge() {
  const age = Number(document.getElementById("ageInput").value);
  const output = document.getElementById("ageOutput");
  if (age >= 18) {
    return (output.innerText = "Þú ert fullorðin/n");
  } else {
    return (output.innerText = "Þú ert barn");
  }
}

//sama skipun:
//else{
// return (outpu.innerText = "Þú ert barn");
//}

function calculate() {
  const num1 = Number(document.getElementById("num1)").value);
  const num2 = Number(document.getElementById("num2)").value);
  const op = document.getElementById("operator").value;

  let result;
  if (op === "+") {
    result = num1 + num2;
  } else {
    result = num1 - num2;
  }
  const output = document.getElementById("calcOutput");
  output.innerText = result;
}
