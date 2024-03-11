let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let country = document.querySelector(".country");
let condition = document.querySelector(".condition");
let temp = document.querySelector(".temp");
let feels = document.querySelector(".feels");
let humidity = document.querySelector(".humid");
let wind = document.querySelector(".wind1");

let apiKey = "140734172d2c4a14a42153054240103";
let url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=India&q=";

async function weather(city){
	 
	let response = await fetch(url + city + "&timestamp=" + new Date().getTime());
	var data = await response.json();

	console.log(data);

	country.innerHTML = data.location.name;
	condition.innerHTML = data.current.condition.text;
	feels.innerHTML = "Feels like " + Math.round(data.current.feelslike_c);
	temp.innerHTML = Math.round(data.current.temp_c); + "°C";
	humidity.innerHTML = data.current.condition.text;
	wind.innerHTML = data.current.wind_kph + "Km/h";
}

btn.onclick=()=>{
	weather(input.value);
}
document.addEventListener("keydown", (event)=>{
	if(event.key === "Enter"){
		event.preventDefault();
		weather(input.value);
	}
})






