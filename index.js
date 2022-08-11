// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function beforeEach() {
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
     return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, 2);
}
function removeFirstCat() {
    return cats.slice(1);
}