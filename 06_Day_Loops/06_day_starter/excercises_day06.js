const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for(let i=0; i<=10; i++){
    console.log(i)
}

for(let i=10; i>=0; i--){
    console.log(i)
}

// let n = prompt("Enter a number: ")
// for(let i=0; i<=n; i++){
//     console.log(i)
// }

for(let i=1; i<=7; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write('#');
        
    }
    console.log("\n")
}

for(let i=0; i<=10; i++){
    console.log(`${i} x ${i} = ${i**2}`)
}

console.log('i\ti^2\ti^3')
for(let i=0; i<=10; i++){
    console.log(`${i}\t${i**2}\t${i**3}`)
}

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i)
    } else {
        continue
    }
}

for(let i=0; i<=100; i++){
    if(i%2!=0){
        console.log(i)
    } else {
        continue
    }
}

let sum = 0
for(let i=0; i<=100; i++){
    sum += i
}
console.log(sum)

let sum_even = 0
let sum_odd = 0
for(let i=0; i<=100; i++){
    if(i%2==0){
        sum_even += i
    } else {
        sum_odd += i
    }
}
console.log(sum_even)
console.log(sum_odd)

let sum_all = []

sum_all.push(sum_even, sum_odd)
console.log(sum_all)

let ran = Array(5)
for(let i=0; i<ran.length; i++){
    ran[i] = Math.floor(Math.random() * 100)
}
console.log(ran)


uniq = Array(5)
for(let i=0; i<uniq.length; i++){
    uniq[i] = Math.floor(Math.random() * 100)
    for(let j=i+1; j<uniq.length; j++){
        if(uniq[i]==uniq[j]){
            uniq.splice(j, 1)
        }
    }
}

console.log(uniq)


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let char = Array()
for(let i=0; i<10; i++){
let randomIndex = Math.round(Math.random() * (characters.length - 1))
char.push(characters[randomIndex])
}
console.log(char.join(''))

console.log(`rgb(${Math.round(Math.random() * (240-0 + 1) + 0)}, ${Math.round(Math.random() * (240-0 + 1) + 0)}, ${Math.round(Math.random() * (240-0 + 1) + 0)})`)


// for(country of countries){
//     console.log(country)
// }

countries_upper = Array(countries.length)

for(let i=0; i<countries.length; i++){
    countries_upper[i] = countries[i].toUpperCase()
}

console.log(countries_upper)

let len_countries = Array(countries.length)

for(let i=0; i<countries.length; i++){
    len_countries[i] = countries[i].length
}

console.log(len_countries)



let arr_countries = []
for(let i=0; i<countries.length; i++){
    let info_country = []
    info_country.push(countries[i])
    info_country.push(countries[i].slice(0, 3).toUpperCase())
    info_country.push(countries[i].length)
    arr_countries.push(info_country)
}

console.log(arr_countries)



let coutries_land = []
for(let i=0; i<countries.length; i++){
    if(countries[i].slice(countries[i].length-4, countries.length) === 'land'){
        coutries_land.push(countries[i])
    }
    //coutries_land.push(countries[i].slice(countries[i].length-3, countries[i].length))
}
console.log(coutries_land)


let countries_ia = []
for(let i=0; i<countries.length; i++){
    if(countries[i].slice(countries[i].length-2, countries.length) === 'ia'){
        countries_ia.push(countries[i])
    }
}

console.log(countries_ia)

let max_country_length = ''
let max = 0
for(let i=0; i<countries.length; i++){
    if(countries[i].length > max){
        max = countries[i].length
        max_country_length = countries[i]
    }
}

console.log(max_country_length)


let countries_5 = []
for(let i=0; i<countries.length; i++){
    if(countries[i].length == 5){
        countries_5.push(countries[i])
    }
}

console.log(countries_5)

let longest_word = ''
let longest = 0
for(let i=0; i<webTechs.length; i++){
    if(webTechs[i].length > longest){
        longest = webTechs[i].length
        longest_word = webTechs[i]
    }
}

console.log(longest_word)

let arr_webTechs = []
for(let i=0; i<webTechs.length; i++){
    let info_webTechs = []
    info_webTechs.push(webTechs[i])
    info_webTechs.push(webTechs[i].length)
    arr_webTechs.push(info_webTechs)
}

console.log(arr_webTechs)


let mern = ''
for(let i=0; i<mernStack.length; i++){
    mern += mernStack[i].charAt(0).toUpperCase()
}
console.log(mern)

for(tech of webTechs){
    console.log(tech)
}