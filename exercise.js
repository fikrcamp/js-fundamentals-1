// Variables and Values exercise

const country = "taiwan"
const continent =  "Asia "
let population = 23

console.log("my country is "+country+ " and it locates in "+continent+ " continent and it has population of "+ population+ " million people" )

const language = "Chinese"
const onCoast = true


// Basic operators exercise

population = population/2
population++
console.log(population)

const finland = 6
console.log(population > finland)
let  avaragepop = 33
console.log(population < avaragepop)
let description =country +" is in " +continent+" and its " + population+"  million people speak " + language
console.log (description)

// If & Else statements 

if(population > avaragepop){
    console.log(country+" population is above average")
}else{
    console.log(country+"s population is "+ population+", bellow average")
}

// Logical Operators

if (population < 50 && onCoast != true )
{
    console.log("you should live in "+ country )
}else {
    console.log(country+ " does not meet your criteria")
}


// If & else Statements 

if(language === "Chinese"){
    console.log("MOST number of native speakers" )
}else if(language === "spanish"){
    console.log("2nd place in number of native speakers" )
}else if(language === "English"){
    console.log("3rd place" )
}else if(language === "hindi"){
    console.log("number 4" )
}else {
console.log("Great languages too :)")
}