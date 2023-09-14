class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    set setName(name){
        this.name = name;
    }

    get getName(){
        return this.name;
    }

    set setAge(age){
        this.age = age;
    }

    get getAge(){
        return this.age;
    }

    set setColor(color){
        this.color = color;
    }

    get getColor(){
        return this.color;
    }

    set setLegs(legs){
        this.legs = legs;
    }

    get getLegs(){
        return this.legs;
    }

    sound(){
        console.log('say something')
    }

    info(){
        console.log(`name: ${this.name}, age: ${this.age}, color: ${this.color}, legs: ${this.legs}`)
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs);
        this.breed = breed;
    }

    sound(){
        console.log('Bark')
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs);
        this.breed = breed;
    }

    sound(){
        console.log('Meow')
    }
}

const dog = new Dog('Dog', 10, 'white', 4, 'Pug');
const cat = new Cat('Cat', 10, 'white', 4, 'Persian');
console.log(dog, cat)
dog.sound()
cat.sound()


class Statistic {
    constructor(data){
        this.data = data;
    }

    count(){
        return this.data.length
    }

    sum(){
        let sum = 0
        for(let x of this.data){
            sum += x
        }
        return sum
    }

    min(){
        let min = this.data[0]
        for(let x of this.data){
            if(x < min){
                min = x
            }
        }
        return min
    }

    max(){
        let max = 0
        for(let x of this.data){
            if(x > max){
                max = x
            }
        }
        return max
    }

    range(){
        return this.max() - this.min()
    }

    mean(){
        return Math.round(this.sum() / this.count())
    }

    median(){
        return this.data[Math.floor(this.count()/2)]
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const s = new Statistic(ages)
console.log(s.count())
console.log(s.sum())
console.log(s.min())
console.log(s.max())
console.log(s.range())
console.log(s.mean())
console.log(s.median())