let a = 10
let b = '10'
console.log(a == b)

console.log(`Number is ${a}`)

let arr = "      Hello, my name is Vo Ngoc Tinh      "
//console.log(arr[1])
arr = arr.trim() //delete spaces head and tail of string


console.log(arr.toLowerCase())
console.log(arr.toUpperCase())
console.log(arr.substr(0, 10)) //substr(start, number of characters)
console.log(arr.substring(1, 4))  //substring(start, end)

arr = arr.split(" ") //split(regexp) string to array 

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// string.replace(oldstring, newstring)
let string = '30 Days Of JavaScript and JavaScript is beautiful but Python is better than JavaScript'
let arr_01 = "Hello my name is Peter"
console.log(arr_01.replace('name', 'Python'))

//string.charAt()
console.log(string.charAt(0)) // output string[0] is '0'
console.log(string.charAt(4)) //output string[4] is 'a'


//string.charCodeAt() print asscii in string's index 
console.log(string.charCodeAt(0)) //output string[0] in asscii is 51
console.log(string.charCodeAt(3)) //output string[1] 'D 'in asscii is 68 


//strong.indexOf(substring/char)
//return value of index start in string
console.log(string.indexOf("Python"))  //return -1 
console.log(string.indexOf("JavaScript")) //return 11 value of first string's index


//string.lastIndexOf("substring")
console.log(string.lastIndexOf("JavaScript")) //return last result index of string 

//string.concat(string to concat)
let str = "hello"
console.log(str.concat(" world")) //to concat string


//string.startWith(string to check) and string.endWith(string to check)
console.log(string.startsWith("30")) //true
console.log(string.endsWith("JavaScript")) //true


//string.search(substring/regrex)

lst = string.search(/JavaScript/gi)
console.log(lst)


//string.match(substring)
//match() return array list of strings
list = string.match(/JavaScript/gi)

for(let i=0; i<list.length; i++){
    console.log(list[i])
}


//to check datatype using typeof
console.log(typeof string) //output string
console.log(typeof list)  //outpyt object


//cast 
//string to int
let s = '10'
console.log(typeof parseInt(s)) //ouput number not string
console.log(typeof Number(s)) //output number
console.log(typeof +s) //ouput number



//string to float
let f = '10.5'
console.log(typeof parseFloat(f)) //output number
console.log(typeof Number(f)) //output number
console.log(typeof +f) //output number


//float to int
let i = 10.5
console.log(typeof parseInt(i)) //output number

//Exercises



/*
if not define let or var, variable is const, can not change
string use "" or ''
format variable in string use ``
can use string as array

*/