//Variables and Values exercise


let country = turkey
let continent = Asia 
let population = 80

console.log(country)
console.log(continent)
console.log(population)

let language = turkish
let coast = true


//Basic operators exercise

//5. Half the population of your country
console.log(population/2)

//6. Increase the population by 1 and log the result to the console
population++
console.log(population)


//Finland has a population of 6 million. Does your country have more people than Finland
let finland = 9
let somalia = 20
if(finland < somalia){
 console.log("somalia have more than finland")
}


//8. The avarage population of a country is 33 million using comparions operators is your countries population have less people than the average country
let turkey = 33
let somalia = 10
if(turkey > somalia){
 console.log("turkey have more than somalia")
}



//9. Based on the varaibles you created create a variable `description` which contains a string with this format 
//*'YOURCOUNTRY is in YOURCONTINENET and its YOURPOPULATION million people speak YOURLANGUAGE'*

let country = "somalia"
let continent = "africa"
let population = "15"
let language = "somali"



//10. if your countries population is greater than 33 million, log a string like this to the console *'YOURCOUNTRY's 
let somali = 33

if (somali >= 33){
    console.log("population is above")
}else {
    console.log("population is below")
}


//11. Lets saying Ahmed is looking for a new country to leave in
let population = 49
let coast = false

if (population < 50 && coast ===true){
    console.log("fits the condition")
    }else{
        console.log("not fity the condition")
    }



    //12. If your country is the right country log a string like this:
    let country = "malaysia"
let population = 50
let coast = true
if (population <= 50 && coast ===true){
    console.log("you should live in malaysia")
    }else{
        console.log("malaysia does not meet your criteria")
    }





//13.  Usee an if & else statements to log the followning string for the given 'language':

    let language = "arabic"


    if(language === "mandarin"){
        console.log("Most numberof native speakers")
    }else if(language === "spanish"){
        console.log("2nd place in number of native speakers")
    }else if(language === "english"){
        console.log("3nd place")
    }else if(language === "hindi"){
        console.log("4nd place")
    }else if(language === "arabic"){
        console.log("5nd place")
    }else{
        console.log("Great languages too")
    }



