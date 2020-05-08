var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(a, b) {
  return [b, ...a];
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a = [b, ...a]
  return a;
}

function addElementToEndOfArray(a, b) {
  return [...a, b];
}

function destructivelyAddElementToEndOfArray(a, b) {
  a = [...a, b]
  return a;
}
