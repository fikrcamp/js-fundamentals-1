// Good Luck! You got this 💪🏾

let country = "Somaliland";
let continent = "Africa";
let population = 5;

console.log(country);
console.log(continent);
console.log(population);

let language = "Somali";
let onCoast = true;

console.log(population / 2);
population++;
console.log(population);
population--;

let finland = 6;

console.log(population > finland);

let avarage = 33;

console.log(population < avarage);

console.log(
  country +
    " is in " +
    continent +
    " and its " +
    population +
    " million people speak " +
    language
);

if (population < 50 && onCoast == false) {
  console.log("You should live in " + country);
} else {
  console.log(country + " does not meet your criteria");
}

if (language === "chinese || mandarin") {
  console.log("MOST number of native speakers");
} else if (language === "spanish") {
  console.log("2nd place in number of native speakers");
} else if (language === "english") {
  console.log("2nd place");
} else if (language === "hindi") {
  console.log("number 4");
} else if (language === "arabic") {
  console.log("5th most spoken language");
} else {
  console.log("Great language too :)");
}
