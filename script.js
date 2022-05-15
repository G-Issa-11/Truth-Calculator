//elements
const resultsButton = document.getElementById("results-btn");
let pVal = document.getElementById("p-val");
let conjunctionVal = document.getElementById("conjunction");
let disjunctionVal = document.getElementById("disjunction");
let xorVal = document.getElementById("xor");
let implicationVal = document.getElementById("implication");
let biconditionalVal = document.getElementById("biconditional");

const calc = document.getElementById("calculator");
let elements = calc.elements;
let obj = {};

//events
resultsButton.addEventListener("click", generateResults);

//functions
function generateResults(e) {
  updateVals();
  pValue = obj["p-val"];
  qValue = obj["q-val"];
  if (pValue == "" || qValue == "") {
    alert("Please select values for both p & q!");
    return;
  }
  pValue = toBoolean(pValue);
  qValue = toBoolean(qValue);
  conjunctionVal.textContent = pValue && qValue;
  disjunctionVal.textContent = pValue || qValue;
  xorVal.textContent = xor(pValue, qValue);
  implicationVal.textContent = implication(pValue, qValue);
  biconditionalVal.textContent = biconditional(pValue, qValue);
  e.preventDefault();
}

function updateVals() {
  for (let i = 0; i < elements.length; i++) {
    let item = elements.item(i);
    obj[item.name] = item.value;
  }
}

function toBoolean(val) {
  return val === "true";
}

function xor(p, q) {
  return (p && !q) || (!p && q);
}

function implication(p, q) {
  if (p) {
    return q;
  } else {
    return true;
  }
}

function biconditional(p, q) {
  return implication(p, q) && implication(q, p);
}
