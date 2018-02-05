const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(Frank) {
  kittens.push(Frank);
}

function destructivelyPrependKitten(Psycho) {
  kittens.unshift(Psycho)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(Fluffy) {
  return [...kittens, Fluffy];
}

function prependKitten(Fathead) {
  return [Fathead, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
