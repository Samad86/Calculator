let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let radicalBtn = document.querySelector(".radical");
let calculateBtn = document.querySelector(".calculate");

plusBtn.addEventListener("click", (e) => {
  plusBtn = "plus clicked";
});

minusBtn.addEventListener("click", (e) => {
  minusBtn = "minus clicked";
});

multiplyBtn.addEventListener("click", (e) => {
  multiplyBtn = "multiply clicked";
});

divideBtn.addEventListener("click", (e) => {
  divideBtn = "divide clicked";
});

radicalBtn.addEventListener("click", (e) => {
  radicalBtn = "radical clicked";
});

function calculate(e) {
  let numFirst = Number(document.getElementById("numFirst").value);
  let numSecond = Number(document.getElementById("numSecond").value);
  //let result = numFirst + numSecond;
  let result = 0;
  if (plusBtn === "plus clicked") {
    result = numFirst + numSecond;
  }
  if (minusBtn === "minus clicked") {
    result = numFirst - numSecond;
  }
  if (multiplyBtn === "multiply clicked") {
    result = numFirst * numSecond;
  }
  if (divideBtn === "divide clicked") {
    result = numFirst / numSecond;
  }
  if (radicalBtn === "radical clicked") {
    result = Math.sqrt(numFirst) || Math.sqrt(numSecond);
  }
  document.getElementById("result").innerHTML = result;
}

calculateBtn.addEventListener("click", calculate);
