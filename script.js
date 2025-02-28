//your JS code here. If required.
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
	fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9bac5b0780f828c74f54b5c028be6aba")
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));

	const displayField = document.createElement('div');
	displayField.id = "weatherData";
	displayField.innerHTML = `Current weather in London: Clouds`
});