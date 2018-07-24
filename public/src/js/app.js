var deferredPrompt;

if (!window.Promise) {
	window.Promise = Promise;
}

if('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('/sw.js')
	.then(function(){
		console.log('service worker registered!');
	})
	.catch(function(err) {
		console.log(err);
	});
}

window.addEventListener('beforeinstallprompt', function(event) {
	console.log('beforeinstallprompt fired');
	event.preventDefault();
	deferredPrompt = event;
	return false;
});



var promise = new Promise(function(resolve,reject){
	setTimeout(function() {
		resolve('This is executed once the time is done!');
	}, 3000);
});

fetch('https://httpbin.org/ip')
	.then(function(response) {
		console.log(response);
		response response.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.log(err);
	});

fetch('https://httpbin.org/post', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body: JSON.stringify({message: 'Does this work?'})	
})
	.then(function(response) {
		console.log(response);
		response response.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.log(err);
	});


promise.then(function(text) {
	return text;
}).then(function(newText) {
	console.log(newText);
});


console.log('This is executed right after setTimeout()');