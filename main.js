
var findbtn = document.querySelector('.findbtn');
var searchInput = document.querySelector('.search');
var city = document.querySelector('.city');
var daymonth = document.querySelector('.daymonth');
var maxtemp = document.querySelectorAll('.maxtemp');
var conditionIcon = document.querySelector('.conditionIcon')
var weatherStatus1 = document.querySelector('.weatherStatus1')
var firstDay = document.querySelector('.firstDay')
//middle, right of grid
var day23 = document.querySelectorAll('.day23');
var mintemp = document.querySelectorAll('.mintemp')
var weatherStatus = document.querySelectorAll('.weatherStatus');
var weatherstatusImg = document.querySelectorAll('.weatherstatusImg')

day23 = Array.from(day23);
maxtemp = Array.from(maxtemp);
mintemp = Array.from(mintemp);
weatherStatus = Array.from(weatherStatus);
weatherstatusImg = Array.from(weatherstatusImg);
var finalres = {};

/*findbtn.addEventListener('onclick',function(){
    test(searchInput.value);
    
    //console.log(finalres.location)
})*/

searchInput.addEventListener('keyup', function () {
    test(searchInput.value);

})

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function test(x=cairo) {
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=495ffa9ee8d7440e8c6184322232402&q=${x}&days=3&aqi=no&alerts=no`)
    var finalres = await res.json();
    console.log(finalres);

    var firstdayWeather = finalres.forecast.forecastday[0];
    city.innerHTML = finalres.location.name;
    // daymonth.innerHTML=firstdayWeather.date;
    const d = new Date(firstdayWeather.date);
    let month = months[d.getMonth()];
    let day = d.getDate();
    let dayName = daysInWeek[d.getDay()];
    firstDay.innerHTML = `${dayName}`;
    daymonth.innerHTML = `${day}${month}`;


    maxtemp.innerHTML = firstdayWeather.day.maxtemp_c;
    conditionIcon.innerHTML = `<img src="http:${firstdayWeather.day.condition.icon}" />`;//leh link msh byzhr
    weatherStatus1.innerHTML = firstdayWeather.day.condition.text;

    for (var i = 0; i < day23.length; i++) {
        const dateee = new Date(finalres.forecast.forecastday[i + 1].date);
        let day = daysInWeek[dateee.getDay()];
        day23[i].innerHTML = `${day}`;
        
    }
    for (var i = 0; i < maxtemp.length; i++) {
        maxtemp[i].innerHTML = finalres.forecast.forecastday[i].day.maxtemp_c;
    }
    for (var i = 0; i < mintemp.length; i++) {
        mintemp[i].innerHTML = finalres.forecast.forecastday[i].day.mintemp_c;
    }
    for (var i = 0; i < weatherStatus.length; i++) {
        weatherStatus[i].innerHTML = finalres.forecast.forecastday[i + 1].day.condition.text;
    }
    for (var i = 0; i < weatherstatusImg.length; i++) {
        weatherstatusImg[i].innerHTML = `<img src="http:${finalres.forecast.forecastday[i + 1].day.condition.icon}" />`;
    }

}








