//Variables and Values.

let country = "England"
let continent = "Europe"
let population = 55.98
console.log(country, "\n",continent, "\n",population)
let language = "English"
let onCoast = true

//Basic operators.

let half = population/2
population++
console.log(population)
let filand = 6

if(population > filand){
    console.log("true")
}
if(population < 33){
    console.log("true")
}

const description = "England is country in europe and its population is 55.98 million also English is main language"

//If & Else

if(population > 33){
    console.log("Your counrty's population is above average")
}else if(population < 33){
    console.log("YOURCOUNTRY's population is YOURPOPULATION, bellow average")
}

//Logical Operators

if(population < 50 && onCoast == false){
    console.log("you should live in YOURCOUNTRY!")
}else{
    console.log("YOURCOUNTRY does not meet your criteria")
}

//f & else

if(language === "Chinese" || language === "Mandarin"){
    console.log("MOST number of native speakers")
}else if (language === "spanish"){
    console.log("2nd place in number of native speakers")
}else if (language === "English"){
    console.log("3rd place")
}else if (language === "Hindi"){
    console.log("Number 4")
}else if(language === "Arabic"){
    console.log("5th most spoken language")
}else{
    console.log("Great languages too")
}