localStorage.setItem('firstname', 'Nguyen');
localStorage.setItem('lastname', 'Hoang')
localStorage.setItem('age', 13)
localStorage.setItem('country', 'Vietname')
localStorage.setItem('city', 'Ha Noi')

console.log(localStorage)

const student = {
    'firs name' : 'John',
    'last name' : 'Doe',
    'age' : 12,
    'skills' : ['HTML', 'CSS', 'JS', 'React', 'Node'],
    'country' : 'USA',
}

localStorage.setItem('student', JSON.stringify(student))

const s = localStorage.getItem('student')
const s1 = JSON.parse(s)
console.log('skills: ' + s1.skills)

