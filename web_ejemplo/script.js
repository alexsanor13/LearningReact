// console.log('Uea')

// let firstName = 'Alex'
// const age = 23
// var city = 'Sentmenat'

// const persona = {
//     name: 'Alex',
//     age: 23,
//     isDeveloper: true
// }

// const field = 'name'
// console.log(persona[field]) // Forma dinámica

// const sum = (a, b) =>{
//     console.log(a)
//     console.log(b)
//     return a + b 
// }

// console.log(sum(1,2))
// console.log(restar(2,2))

// function restar (a, b) {
//     return a + b
// }

// // console.log(2 == '2') // true
// // console.log(2 === '2') // false

// const t = [10 ,11 ,12 , [5, 6, 7]]

// t.forEach(element => {
//     if(element.length > 1){
//         element.forEach(n => {
//             console.log(n + ' uea')    
//         });
//     }
//     else{
//         console.log(element)
//     }
// });



/*---------------------Functional programming----------------------*/

// const animals = [
//     { name:'Luky', specie:'Dog'},
//     { name:'Currito', specie:'Cat'},
//     { name:'Chispi', specie:'Dog'},
//     { name:'Stitch', specie:'Cat'},
//     { name:'Lilo', specie:'Cat'},
//     { name:'Leo', specie:'Turtle'},
//     { name:'Flai', specie:'Bird'},
//     { name:'Lima', specie:'Bird'},
//     { name:'Rodi', specie:'Guinea pig'},
//     { name:'Mr Jingles', specie:'Hamster'},
// ]

// const isDog = (animal) => animal.specie === 'Dog'
// const noDog = (animal) => animal.specie !== 'Dog'
// let perritos = animals.filter(isDog);
// let noPerritos = animals.filter(noDog);
// console.log(perritos)
// console.log(noPerritos)

// let names = animals.map((x) => x.name)
// console.log(names)

// let total = animals.reduce((sum,animal) => sum + animal.name + ' ', '')
// console.log(total)



/*---------------------Formatting data from a file with functional programming----------------------*/

// const fs = require('fs')

// let output = fs.readFileSync('data.txt','utf8')
//     .trim()
//     .split(/\r?\n|\r/g)
//     .map(line => line.split('  '))
//     .reduce((costumers, line) => {
//         costumers[line[0]] = costumers[line[0]] || []
//         costumers[line[0]].push({
//             name: line[1],
//             price: line[2] + " €",
//             quantity : line[3] + " uds"
//         })
//         return costumers
//     }, {})

// console.log('output', JSON.stringify(output, null, 2))



/*---------Currying----------*/

let perro = (name,size,color) => 
    name + " is a " +
    size + " " +
    color + " dog."
    
console.log(perro("pedrito", "big", "brown"))

let gato = 
    name => 
        size => 
            color => 
                name + " is a " + 
                size + " " + 
                color + " cat."

console.log(gato("stitch")("tiny")("grey"))