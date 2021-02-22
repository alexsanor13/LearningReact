console.log('Uea')

let firstName = 'Alex'
const age = 23
var city = 'Sentmenat'

const persona = {
    name: 'Alex',
    age: 23,
    isDeveloper: true
}

const field = 'name'
console.log(persona[field]) // Forma dinámica

const sum = (a, b) =>{
    console.log(a)
    console.log(b)
    return a + b 
}

console.log(sum(1,2))
console.log(restar(2,2))

function restar (a, b) {
    return a + b
}

// console.log(2 == '2') // true
// console.log(2 === '2') // false

const t = [10 ,11 ,12 , [5, 6, 7]]

t.forEach(element => {
    if(element.length > 1){
        element.forEach(n => {
            console.log(n + ' uea')    
        });
    }
    else{
        console.log(element)
    }
});