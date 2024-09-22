const os = require('os');

//Info of current user
const user = os.userInfo();
console.log(user);

//method return system uptime in seconds
console.log(`The system uptime is ${os.uptime}`);

const currentOS = {
    name : os.type(),
    relese : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);


