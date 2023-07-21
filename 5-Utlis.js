//modules
//CommonJS, every file is module(by default)
//Modules, Encapsulated code (only share minimum)

const sayHi = (name)=>{
    console.log(`Hello there ${name}`)
}

module.exports = sayHi //pass function between {} but variables with it 