arr = Array(1, 2, 3, 4, 5)
console.log(arr)
console.log(arr.length)

console.log(arr[0], arr[arr.length-1], arr[Math.floor(arr.length/2)])

let mixedDataTypes = [
    'a',
    {"name" : "Peter"},
    true,
    61,
    [1, 2, 3, 4, 5]
]

console.log(mixedDataTypes.length) //output: 5


let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length) //output:
console.log(itCompanies[0], itCompanies[itCompanies.length-1], itCompanies[Math.floor(itCompanies.length/2)])

for (let i in itCompanies){
    console.log(itCompanies[i].toUpperCase()) //
}

const lst = [];

for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let oCount = 0;

  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
      oCount++;
    }
  }

  if (oCount > 1) {
    lst.push(company);
  }
}

console.log(lst)

// console.log(itCompanies.sort())

// console.log(itCompanies.reverse())

let first3_companies = itCompanies.slice(0, 3)
console.log(first3_companies)

let last3_companies = itCompanies.slice(itCompanies.length-3, itCompanies.length)
console.log(last3_companies)

let middle_company = itCompanies[Math.floor(itCompanies.length/2)]
console.log(middle_company)

itCompanies.shift()
console.log(itCompanies)

itCompanies.pop()
console.log(itCompanies)

itCompanies.splice(Math.floor(itCompanies.length/2), 1)
console.log(itCompanies)
