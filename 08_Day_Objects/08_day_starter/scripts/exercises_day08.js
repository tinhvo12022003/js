

const dog = {
    name: 'Rex',
    age: 2,
    color: 'black',
    legs: 4,
    bank: function (){
        return "woof woof"
    }
}

console.log(dog.name)
console.log(dog.age)
console.log(dog.color)
console.log(dog.legs)
console.log(dog.bank())

dog.breed = 'labrador'
dog.getInfo = () => {
    return `My name is ${dog.name} and I am ${dog.age} years old`
}
console.log(dog)


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


let maxskill = 0;
let maxUserSkill;

for(let user in users){
    if(users[user].skills.length > maxskill){
        maxskill = users[user].skills.length
        maxUserSkill = users[user]
    }
}
console.log(maxskill);
console.log(maxUserSkill);

let count = 0
for(let user in users){
    if(users[user].points >= 50){
        count+=1
    }
}
console.log(count)

for(let user in users){
    if(users[user].skills.includes('MongoDB') && users[user].skills.includes('Express') && users[user].skills.includes('Node') && users[user].skills.includes('React')){
        console.log(users[user])
    }
}

const key = Object.keys(users)
console.log(key)

const value = Object.values(users)
console.log(value)


