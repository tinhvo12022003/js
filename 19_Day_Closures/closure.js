let outerfunction = function(){
    let b = 1 //closure variable
    let a = function(){
        b++
        console.log(b)
    }
    return a
}

let c = outerfunction()
c()
c()
c()