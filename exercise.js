// Good Luck! You got this 💪🏾
// Write your code here.

//Variables and Values exercise

let country = "Somalia";
let population = 16000000;
let continent ="Africa"
console.log(country);
console.log(population);
console.log(continent);
let language = "somali"
let onCoast = true;

//Basic operators exercise
let half_pop = population / 2 ;
  population = population + 1000000;
console.log(population);
let finland_pop =6000000;
if (finland_pop > population){
    console.log(true)
} else{
    console.log(false)
}

let average_pop = 33000000;
if (average_pop >= population){
    console.log(true);
}else{
    console.log(false);
}

let description = 'YOURCOUNTRY is in YOURCONTINENET and its YOURPOPULATION million people speak YOURLANGUAGE' ;

//If & Else statements 
if (population >= average_pop){
    console.log("somali's population is above average");
}else{
    console.log("somali's population is " + population + " below average");
}

// Logical Operators
 if( population >= 55000000 && onCoast == true){
    console.log( true);
 } else {
   console.log(false)

 }

 if(population < 50000000 && onCoast == false){
    console.log("you should live in Somalia!")
}else{
    console.log("Somalia does not meet your criteria  ");
}

// If & else Statements 

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
    console.log("Great languages too ");
}

 
 