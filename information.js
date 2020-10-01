let myName = 'Aline SOUMAH';
let myCampus = "WCS La Loupe";

const myInfos = () => {
    console.log(`Hi my name is ${myName} and myCampus is ${myCampus}`);
};

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));


module.exports = myInfos;
