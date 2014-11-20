var x = process.argv[2];
var random = (Math.floor(Math.random()*9)+1);

var arr=["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var arrtwo=["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];

for (i=0; i < x; i++) {
  console.log(arr[i], arrtwo[i])
}
