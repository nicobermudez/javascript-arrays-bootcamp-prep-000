var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
 
  return [array, ...element];
  
}
function destructivelyAddElementToEndOfArray(array, element) {
  array[array.length()-1] = element; 
  return array;
  
}
function accessElementInArray(array, index) {
  return array[index];
  
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
  
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}
function removeElementFromEndOfArray(array) {
  var new_array = array;
  new_array.slice(0, array.length()-1);
  return new_array
}
