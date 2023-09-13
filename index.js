const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(-1);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}

function appendCat(name) {
    var newLastCats = cats.slice();
  
  newLastCats.push(name)
  return newLastCats;
}

function prependCat() {
   var newFirstCats = cats.slice();
   newFirstCats.unshift("Arnold")
   return newFirstCats;
}

function removeLastCat() {
   var removeLastCat = cats.slice();
   removeLastCat.pop(-1);
   return removeLastCat;
}

function removeFirstCat() {
    var removeFirstCat = cats.slice();
    removeFirstCat.shift(0);
    return removeFirstCat;
}
