/*var names = ['Mikko', 'Jussi', 'Antti', 'Tarja', 'Rauno'];


/*names.forEach((name) => console.log(name[0]));


var returnMe = (name) => name+'!';

console.log(returnMe('Jussi'));


var person = {
	name: 'Jussi',
	greet: function() {

		names.forEach((name) => console.log(this.name + ' says hi to ' + name));
	}
}

person.greet();*/

function add (a,b) {
	return a+b;
}

var addStatement = (a,b) => {
	return a+b;
}

var addExpression = (a,b) => a+b;

console.log(addExpression(2,322));
console.log(addStatement(9,91));