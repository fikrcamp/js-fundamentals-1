// // Good Luck! You got this 💪🏾
// // Write your code here.




 let country="Somalia"
 let continent="Africa"
 let population="8"

 console.log(country);

 console.log(continent);
 console.log(population);


let language="they speak Somali language 99% "
let hascoats=true
console.log(language);
console.log(hascoats );


population /= 2;

population++;
console.log(population); 

let finlandPopulation = 6;
console.log(population > finlandPopulation);
console.log(population < 7);


let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description); 


if (population > 4) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${population}, below average`);
  }
  

  if (population < 50 && !hascoats) {
    console.log('You should live in ' + country + '!');
  } else {
    console.log(country + ' does not meet your criteria :(');
  }
  
  if (language === 'chinese' || language === 'mandarin') {
    console.log('MOST number of native speakers');
  } else if (language === 'spanish') {
    console.log('2nd place in number of native speakers');
  } else if (language === 'english') {
    console.log('3rd place');
  } else if (language === 'hindi') {
    console.log('Number 4');
  } else if (language === 'arabic') {
    console.log('5th most spoken language');
  } else {
    console.log('Great languages too :)');
  }
  



// 10. if your countries population is greater than 33 million, log a string like this to the console *'YOURCOUNTRY's population is above average'* otherwise, log a string like *'YOURCOUNTRY's population is YOURPOPULATION, bellow average'*

// ## Logical Operators

// 11. Lets saying Ahmed is looking for a new country to leave in. He wantes to live in a country with a population less than 50 million and is not on the coast. Write a if statement to help Ahmed see if your country fits the conditions
// 12. If your country is the right country log a string like this: *'you should live in YOURCOUNTRY!'* if not log *'YOURCOUNTRY does not meet your criteria :('*  (NOTE: if your country doesnt meet the criteria change some variables to make sure the codition is working properly)

// ## If & else Statements 
// 13.  Usee an if & else statements to log the followning string for the given 'language':
// **chinese or mandarin:** 'MOST number of native speakers'
// **spanish:** '2nd place in number of native speakers'
// **english:** '3rd place'
// **hindi:** 'Number 4'
// **arabic:** '5th most spoken language'
//  for all other simply log 'Great languages too :)'
