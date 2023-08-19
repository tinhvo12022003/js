// this is your main.js script
var age = prompt("Enter your age:");
if( age >= 18){
console.log("You are enough to drive")
} else {
console.log(`You are left with ${18-age} to drive`)


}


let age = prompt("Enter your age: ")
if(age >= 20){
console.log(`You are ${age-20} years older than me.`)
} else {
console.log(`You are ${20-age} years younger than me.`)
}

let a = prompt("Enter a number:")
let b = prompt("Enter a number: ")

if(a > b){
console.log(`${a} is greater than ${b}`)
} else {
console.log(`${b} is greater than ${a}`)
}


let c = prompt("Enter a number: ")
if(c % 2 == 0){
    console.log(`${c} is even`)
} else {
    console.log(`${c} is odd`)
}


let score = prompt("Enter your score: ")
if(score >= 80 && score <= 100){
    console.log("A")
} else if(score <80 && score >=70){
    console.log("B")
} else if(score <70 && score >=60){
    console.log("C")
} else if(score <60 && score >=50){
    console.log("D")
} else {
    console.log("F")
}



let today = prompt("What is the day today? ")
switch(today.toLowerCase()){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${today.charAt(0).toUpperCase() + today.toLowerCase.slice(1)} is a working day.`)
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${today.charAt(0).toUpperCase() + today.toLowerCase.slice(1)} is a weekend.`)
}

let month = prompt("Enter a month: ")
switch(month.toLowerCase()){
    case 'january':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month.charAt(0).toUpperCase() + month.toLowerCase().slice(1)} has 31 days`)
        break

    case 'february':
        console.log(`${month.charAt(0).toUpperCase() + month.toLowerCase().slice(1)} has 28 days`)
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month.charAt(0).toUpperCase() + month.toLowerCase().slice(1)} has 30 days`)
        break
    default:
        break
}


