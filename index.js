// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
  return cats.push(name);
}
function destructivelyPrependCat(name){
  return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
  return cats.pop()
}
function destructivelyRemoveFirstCat(){
  return cats.shift()
}
function appendCat(name){
  let newarr = cats.concat(name);
  return newarr;
}
function prependCat(name){
  let newArray = []
  newArray = cats.concat(newArray);
  newArray.unshift(name)
  return newArray
}
function removeLastCat(){
  let newArray = []
  newArray = cats.concat(newArray);
  newArray.pop()
  return newArray
}
function removeFirstCat(){
  let newArray = []
  newArray = cats.concat(newArray);
  newArray.shift()
  return newArray
}
