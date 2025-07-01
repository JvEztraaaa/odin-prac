function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// Apply `toUpper()` to each item in the array using .map()
const upperCats = cats.map(toUpper);

console.log(upperCats);
// Output: [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
