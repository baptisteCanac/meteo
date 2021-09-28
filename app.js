function submitCity(){
	let cityNameValue = document.getElementById("cityName").value;
	let firstApiPart = "https://api.openweathermap.org/data/2.5/weather?q=";
	let lastApiPart = "&units=metric&appid=bc136c51a7ede978aad9f52e0076b0f8";
	let fullApi = firstApiPart + cityNameValue + lastApiPart;
	$.get(fullApi, callBackSuccess).done(function() {
		console.log('it work');
	})
	.fail(function() {
		window.alert("error");
	})
}
let callBackSuccess = function(data){
	$("#fullCityContainer").show();
	console.log('données api', data)
	let cityName = data.name;
	let temp = data.main.temp;
	let tempMin = data.main.temp_min;
	let tempMax = data.main.temp_max;
	let printCityName = document.getElementById("city")
	printCityName.innerHTML = cityName;
	let printTemp = document.getElementById("temp");
	printTemp.innerHTML = temp + "°C";
	let printMinTemp = document.getElementById("tempMin");
	printMinTemp.innerHTML = tempMin + "°C";
	let printMaxTemp = document.getElementById("tempMax");
	printMaxTemp.innerHTML = tempMax + "°C";
}