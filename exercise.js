// Good Luck! You got this 💪🏾
// Write your code here.
// Variables and Values exercise
let continent = "Africa";
console.log(continent);

let country = "Somaliland";
console.log(country);

let Som_Population = 4000000;
console.log(Som_Population);

let language = "somali";
console.log(language);

let onCoast = true;
if (onCoast ==true){
   console.log("My country has got coast")
}


// Basic operators exercise
//half the population 
console.log(Som_Population/2);

//Increase the population by 1 and log the result to the console

console.log(Som_Population ++);

// Finland has a population of 6 million.
//  Does your country have more people than Finland
let Finland_Population = 2000000;
console.log(Som_Population === Finland_Population);

//average thing 
let random_country_population = 33000000;
if (random_country_population > Som_Population){
    console.log( country +" " +"has got less population than this random country's population")
}

//description variable 
let description = "Somaliland is in Africa and its 4 million people speak YOURLANGUAGE"
console.log(description);

// If & Else statements 
if (Som_Population > 33000000){
    console.log( country +" "+"population is above average")
}
else {
    console.log(country +" " + " population is bellow average")
}

//Logical Operators
if (Som_Population < 50000000 && onCoast == false) {
    console.log("you should live in Somaliland!")
}
else {
    console.log( country + " "+" does not meet your criteria ")
}
//If & else Statements 
let languages = "mandarin";
if (languages == "mandarin"){
    console.log("MOST number of native speakers")
}
else if (languages == spanish){
     console.log("2nd place in number of native speakers")

}
else if (languages == english){
    console.log("3rd place in number of native speakers")
    
}
else if (languages == hindi){
    console.log("4th place in number of native speakers")
    
}
else if (languages == hindi){
    console.log("5th most spoken language")
    
}
else {
    console.log("Great languages too :)")
}
//The conditional (Ternary) operator
Som_Population > 33000000 ? console.log(country+" "+" population is above average") : console.log("Somaliland's population is above average")