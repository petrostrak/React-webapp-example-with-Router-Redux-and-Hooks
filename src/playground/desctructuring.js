// const person = {
//     name: 'Petros',
//     age: 34,
//     location: {
//         city: 'Athens',
//         temperature: 35
//     }
// }

// const {name, age} = person;

// console.log(`Hi!My name is ${name} and I'm ${age} years old`);

// const {city} = person.location;

// console.log(`I live in ${city}.`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        marakiSe9elw: 'Penguin'
    }
}

const {title, author} = book;
console.log(`Title of the book is "${title}". It is written by ${author}.`)
const {marakiSe9elw: name = 'unknown'} = book.publisher;
console.log(`The publisher of this book is called ${name}.`)