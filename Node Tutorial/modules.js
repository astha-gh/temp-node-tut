const names = require('./firstModule');
console.log(names);
const sayHi = require('./secondModule');
console.log(sayHi);

sayHi(names.man);
sayHi(names.demon);
sayHi('Sukuna');

const dishes = require('./alternaticeSynExport');
console.log(dishes);
