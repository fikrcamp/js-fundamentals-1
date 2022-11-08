// Good Luck! You got this 💪🏾
// Write your code here.

//Variables and Values

let country = "Switzerland";
let continent = "Europe";
let population = 8600000;

console.log(country, continent, population);

let language = "German";
let onCoast = false;

//Basic operators

let halfedpop = population/2;
let popPlus = population+1;
console.log(popPlus);

let finlandpop = 6000000;
if (population > finlandpop ){
    console.log("yes");
}
if (population < 33000000 ){
    console.log("yes");
}
let description = "Switzerland is in Europe and its 8.6 million people speak German";

//If & Else statements 

if (population > 33000000){
    console.log("Switzerland's population is above average");
}
else{
     console.log("Switzerland's population is " + population + ", below average");

}

//Logical Operators

if (population < 50000000 && onCoast === false){
    console.log("you should live in Switzerland!");

}
else{
     console.log("Switzerland does not meet your criteria");

}

//If & else Statements 

let lang = "";
if(lang === "chinese" || lang === "mandarin"){
    console.log("MOST number of native speakers");
}
else if(lang === "spanish"){
    console.log("2nd place in number of native speakers");
}
else if(lang === "hindi"){
    console.log("Number 4");
}
else if(lang === "arabic"){
    console.log("5th most spoken language");
}
else {
   console.log("Great languages too ");
}



