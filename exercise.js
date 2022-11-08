
// variables and values


let country = "somaliland";
let continent = "Africa";
let population = 3000000;
let language = "Af-soomali";
let onCoast = true;

console.log(country, "\n", continent, "\n", population, "\n", language, "\n", onCoast);


// basic operators

// half of population
let halfOf =  population / 2;
console.log(halfOf);



// increasing one to popuation
population++;
console.log(population);


// population comparison
let finlandPopulation = 6000000;
let comparison = finlandPopulation === population;
console.log(comparison);


//comaring the average population to my country population
let averagePopulation = 33000000;
let AveComparison = population > averagePopulation;

console.log(AveComparison);

let description = `_'${country} is in ${continent} and its population is  ${population} million people speak ${language}'_`
console.log(description);



// if and else statements


 if(population > 33000000){
  console.log(`${country} population is above average`);
}else 
  console.log(`${country} population is ${population}, bellow average`)



  // logical operators


  if(population < 50000000 && onCoast != true){
    console.log(`you should live in ${country}`);
  }else 
     console.log(`${country} does not meet your criteria`)



// if and else statements

if(language === "chinese" && "mandarin"){
  console.log("MOST number of native speakers");
}else if(language === "spanish"){
  console.log("2nd place in number of native speakers");
}else if(language === "english"){
  console.log("3rd place");
}else if(language === "arabic"){
  console.log("5th most spoken language");
}else 
console.log("Great languages too");