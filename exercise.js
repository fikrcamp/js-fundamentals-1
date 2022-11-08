let country= "Somaliland"
let continent= "Africa"
let population= 5000000

console.log(country)
console.log(continent)
console.log(population)

let language= "Somali"

let onCoast= true

let x=2
console.log(population / x)

population++
console.log(population)

let finland= 6000000
console.log(population>finland)

let avaragepopulation= 33000000
console.log(population<avaragepopulation)

let describtion= "Somaliland  is in Africa and its 5000000 million people speak Somali"

if(population > avaragepopulation){
    console.log("Somaliland's population is above avarage")
}
else if(population < avaragepopulation){
    console.log("Somaliland's population is 5000000 below avarage")
}


if( population <50000000 &&  onCoast==false){
    console.log("You should live in Somaliland")
}else{
    console.log("Somaliland does not meet your criteria")
}

if(language == "chinese" ){
    console.log("Most number of native speakers")
}
else if(language == "Spanish"){
    console.log("2nd place in number of native speakers")
}
else if(language == "English"){
    console.log("3rd place")
}
else if(language== "Hindi"){
    console.log("Number 4")
}
else if (language == "Arabic"){
    console.log("5th most spoken language")
}
else(
    console.log("Great languages too :)")
)











    