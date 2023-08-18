let string = "30 Days Of JavaScript"
console.log(string)

console.log(string.length) //print length of string

let upper = string.toUpperCase()

let lower = string.toLowerCase()

let firstword = string.slice(0, 2)
console.log(firstword)


//string.slice(start, end)
console.log(string.slice(string.indexOf("Days")))


//string.includes(substring)
//return true if substring exist in string else return false
console.log(string.includes("Script"))

lst = string.split(" ")

company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
com_lst = company.split(",")

// string = string.replace("JavaScript", "Python")
console.log(string)

console.log(string.charAt(15))
console.log(string.charCodeAt(15))

console.log(string.indexOf('a'))
console.log(string.lastIndexOf('a'))

let sentence =  'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))

console.log(sentence.search("because"))

let trim_method = ' 30 Days Of JavaScript '
console.log(trim_method.trim())


console.log(string.startsWith('30'))
console.log(string.endsWith('JavaScript'))


console.log(string.match(/a/gi))

console.log('30 Days of'.concat("JavaScript"))

console.log(string.repeat(2))

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"")

console.log(typeof +'10' === typeof 10) //ouput true

console.log(typeof Math.round(parseFloat('9.8')) == typeof 10)
console.log(Math.round(parseFloat('9.8')) == 10)


console.log('Python'.includes('on') && 'Jargon'.includes('on'))

console.log('I hope this course is not full of jargon.'.includes('jargon'))


console.log(Math.round(Math.random()*100))

console.log(Math.floor(Math.random() * 52)+50)

const randomIndex = Math.floor(Math.random() * 'JavaScript'.length);
const randomCharacter = 'JavaScript'[randomIndex];
console.log(randomCharacter);

for(let i = 1; i<=5; i++){
    let line =  `${i} `
    for(let j=0; j<=3; j++){
        line += `${Math.pow(i, j)} `
    }
    console.log(line)
}

console.log(sentence.match(/because/gi).length)

const sentence_ = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence_.replace(/[^\w\s]/gi, ''))


