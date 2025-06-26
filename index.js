let input = document.querySelector("input");

function addValue(modules) {
  input.value += modules;
}

function clearVal() {
  input.value = "";
}

function deleteCharacter() {
  input.value = input.value.slice(0, input.value.length - 1);
}

function evaluateVal() {
  input.value = eval(input.value);
}
