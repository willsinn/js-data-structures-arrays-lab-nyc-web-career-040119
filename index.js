// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let newArr = [];
    newArr = drivers.concat(name);
    return newArr;
}

function prependDriver(name) {
  let newArr = [];
      newArr = [ name, ...drivers];
      return newArr;
}

function removeLastDriver() {
  let newArr = [];
      newArr = drivers.slice(0, newArr.length-1)
      return newArr;
}

function removeFirstDriver(name) {
  let newArr = [];
    newArr = drivers.slice(1);
    return newArr;
}
