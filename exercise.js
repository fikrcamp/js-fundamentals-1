// Good Luck! You got this 💪🏾
// Write your code here.
let continent="africa"
let country="somaliland"
let population=5000000
let language="somali"
let coast=true

console.log(population/2)
population++
console.log(population)
console.log(population >6000000)
console.log(population <33000000)
let description=`${country} is in ${continent} and its ${population} million people speak ${language}`
console.log(description)

if(continent>33000000){
    console.log(`${country} populations is above average otherwise`)
}else{
    console.log(`${country} population is ${population} bellow average`
    )
}

if(coast=true && population<50000000 ){
    console.log(`you should live in ${country}`)
}else{
    console.log(`${country} does not meet your criteria`)
}

if(language=="chinease" || language=="mandarin"){
    console.log("most number of native speakers")
}else if(language=="spanish"){
    console.log("2nd place in number of native speakers")
}
else if(language=="english"){
    
    console.log("3nd place ")
}else if(language=="hindi"){
    console.log("4nd place ")
}else{
    console.log("great language too")
}