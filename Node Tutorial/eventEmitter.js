const EventEmitter = require('events');
const { constrainedMemory } = require('process');

//here EventEmitter is a class
//We will create instances

const customEmitter = new EventEmitter;
//the instance customEmitter has method but the important once are on() and emit()
//on() --> listen for an event
//emit() --> emit an event


//Basic
customEmitter.on('response' , () => {
    console.log(`Data received`);
});

customEmitter.on('response' , (name , id) => {
    console.log(`Data received by ${name} and id : ${id}`);
});

customEmitter.emit('response' , 'Astha' , 546);