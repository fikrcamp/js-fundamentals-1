//Variables and Values exercise
let country = "Djibouti"
let continent = "Africa"
let population = "1000000"

console.log(country)
console.log(continent)
console.log(population)

let language = "Somali"
let onCoast = false //Djibouti has a coast but I've made it false so that the conditions work for Question#12 

//Basic operators exercise
let halfPopulation = population / 2 
halfPopulation++
console.log(halfPopulation)

let finlandPopulation = 6000000
if(finlandPopulation > population){
    console.log(true)
}

let averagePopulation = 33000000
if(averagePopulation >= population){
    console.log("Djibouti has less people than the average country")
}

let description = `${country} is in ${continent} and its ${population} million people speak ${language}`
console.log(description)

//If & Else statements
if(population > averagePopulation){
    console.log(`${country}'s population is above average`)
}else{
    console.log(`${country}'s population is ${population}, below average`)
}

//Logical Operators
if(population < 50000000 && onCoast == false){
    console.log("you should live in DJIBOUTI!")
}else{
    console.log("Djibouti does not meet your criteria :(")
}

//If & else Statements
if(language == "chinese" || language == "mandarin"){
    console.log("MOST number of native speakers")
}else if(language == "spanish"){
    console.log("2nd place in number of native speakers")
}else if(language == "english"){
    console.log("3rd place")
}else if(language == "hindi"){
    console.log("4th place")
}else if(language == "arabic"){
    console.log("5th most spoken language")
}else{
    console.log("Great languages too :)")
}