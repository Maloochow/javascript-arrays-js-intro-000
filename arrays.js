var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(a, b) {
  var a = [b, ...a]
  return a;
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return [b, ...a];
}

function addElementToEndOfArray(a, b) {
  var a = [...a, b]
  return a;
}
