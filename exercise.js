// Good Luck! You got this 💪🏾
// Write your code here.

//quesiton 1,3 and 4
let country = 'turkey';
let continent = 'europe';
let population = 80;
let language = 'turkish';
let onCoast = true;
//question2
console.log(country, continent, population, language, onCoast)
//question 5
population = population / 2
console.log(population)
//question 6
population += 1
console.log(population)
//question 7
let finland_population = 6;
console.log(population > finland_population)
//question 8
let country_two = 33;
console.log(country_two < population)
//question 9
let description = (country + "is in " + continent + " and its " + population + " million" + " and also people speak " + language)
console.log(description)

//question 10
let country_example = 33;

if (population > country_example) {
    console.log(country + " 's population is above")
} else {
    console.log(population + " 's population is below average")
}

//question 12 
if (population < 50 && onCoast === false) {
    console.log("you should live in " + country)
} else {
    console.log(country + " does not meet your criteria")
}



if (language == 'spanish') {
    console.log("2nd place in number of native speaker")
} else if (language == 'english') {
    console.log('3rd place')
} else if (language == 'hindi') {
    console.log('number4')
} else if (language == 'arabic') {
    console.log('5st most spoken languege')
} else {
    console.log('Great langueges too : ')
}