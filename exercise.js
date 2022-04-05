// ## Variables and Values exercise
// 1. Declare variables called `country`, `continent` and `population` and assign their values according to your own country (population in millions)
// 2. Log their values to the console
// 3. Declare a variable called `language` and set the value to the language spoken in your country
// 4. Declare a variable called `onCoast` and set the value to a boolean value indicating if your country has a coast or not

let country = 'Somaliland'
let continent = 'Africa'
let population = 3500000
console.log(`The country is ${country}, it's in ${continent} and around ${population} call it home.`);
let language = 'somali'
let onCoast = true



// ## Basic operators exercise

// 5. Half the population of your country
// 6. Increase the population by 1 and log the result to the console
// 7. Finland has a population of 6 million. Does your country have more people than Finland
// 8. The avarage population of a country is 33 million using comparions operators is your countries population have less people than the average country
// 9. Based on the varaibles you created create a variable `description` which contains a string with this format *'YOURCOUNTRY is in YOURCONTINENET and its YOURPOPULATION million people speak YOURLANGUAGE'*

console.log(population*0.5);
console.log(population+1);
console.log(6000000<population)
console.log(6000000>population)
let description = `${country} is in ${continent} and it's population is ${population} people and they speak ${language}`
console.log (description)


// ## If & Else statements 

// 10. if your countries population is greater than 33 million, log a string like this to the console *'YOURCOUNTRY's population is above average'* otherwise, log a string like *'YOURCOUNTRY's population is YOURPOPULATION, bellow average'*

if(population>33000000){
    console.log(`${country}'s population is above average`)
}else{
    console.log(`${country}'s population is ${population}, and it's bellow the average`)
}

// ## Logical Operators

// 11. Lets saying Ahmed is looking for a new country to leave in. He wantes to live in a country with a population less than 50 million and is not on the coast. Write a if statement to help Ahmed see if your country fits the conditions
// 12. If your country is the right country log a string like this: *'you should live in YOURCOUNTRY!'* if not log *'YOURCOUNTRY does not meet your criteria :('*  (NOTE: if your country doesnt meet the criteria change some variables to make sure the codition is working properly)

if(population<50000000 && onCoast===false){
    console.log(`you should live in ${country}`)
}else{
    console.log(`${country} does not meet your criteria`)
}

// ## If & else Statements 
// 13.  Usee an if & else statements to log the followning string for the given 'language':
// **chinese or mandarin:** 'MOST number of native speakers'
// **spanish:** '2nd place in number of native speakers'
// **english:** '3rd place'
// **hindi:** 'Number 4'
// **arabic:** '5th most spoken language'
//  for all other simply log 'Great languages too :)'

if(language==="chinese" || language==="mandarin"){
    console.log("MOST number of native speakers")
}else if (language==="spanish"){
    console.log("2nd place in number of native speakers")
}else if (language==="english"){
    console.log("3rd place")
}else if (language==="hindi"){
    console.log("number 4")
}else if (language==="arabic"){
console.log("5th most spoken language")
}else{
    console.log("great languages too")
}


// 14. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'YOURCOUNTRY's population is above average'. Otherwise, simply log 'YOURCOUNTRY's population is below average'


population > 33000000 ? console.log(`${country}'s population is greater than average`) : console.log(`${country}'s population is below average`)