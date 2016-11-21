// http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=508609b1a7e39820e2a689182d1a2306
/*

function getTempCallback(location, callback) {

	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Philadelphia', function(err,temp) {

	if(err) {console.log('error', err);}
	else {console.log('success', temp);}
});


function getTempPromise(location) {

	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(79);
			reject('Vituiks meni');
		},2000);
		console.log('Working...');
	});
}

getTempPromise('Philadelphia').then(function(temp) {
	console.log('promise success', temp);
}, function(err){
	console.log('promise error', err);
});*/

function addPromise (a,b) {

	return new Promise(function(res,rej){

		if (typeof a !== 'number' || typeof b !== 'number') rej('homo');
		else res(a+b);
	});
}

addPromise(2,5).then(function(num){
	console.log('success', num);
}, function(err){
	console.log('error', err);
});

addPromise('kyrpä',5).then(function(num){
	console.log('success', num);
}, function(err){
	console.log('error', err);
});