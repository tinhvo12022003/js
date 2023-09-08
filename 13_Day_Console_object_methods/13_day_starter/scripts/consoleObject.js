console.log();
//show output on browser console
console.log("Hello World");

//subsitution
console.log("%d + %d = %d", 1, 4, 1 + 4);

//css
console.log("%chello world", "color: red")



console.warn("warning")
/**We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices. 
 * 
 */

console.error("this is an error messages")


const students = [
    { name: 'John', age: 20, grade: 'A' },
    { name: 'Alice', age: 22, grade: 'B' },
    { name: 'Bob', age: 21, grade: 'C' }
  ];
  
  console.table(students);



//   const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
//   ]
//   console.table(countries)

  console.time()
for(let i = 0; i <= 100; i++){
    console.log(i)
}
console.timeEnd()



console.assert(4 < 3, "4 is greater than 3"); //false condition


const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()