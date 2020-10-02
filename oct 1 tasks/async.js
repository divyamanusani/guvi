
// Display weather content in Modal
var modal = createEleWithClass('div', 'modal fade');
modal.setAttribute('id', 'myModal');
modal.setAttribute('role', 'dialog');
var dialog = createEleWithClass('div', 'modal-dialog');
var content = createEleWithClass('div', 'modal-content');
var header = createEleWithClass('div', 'modal-header');
var mbody = createEleWithClass('div', 'modal-body');
var mfooter = createEleWithClass('div', 'modal-footer');
var mbtn = createEleWithClass('button', 'close');
mbtn.setAttribute('type', 'button');
mbtn.setAttribute('data-dismiss', 'modal');
mbtn.setAttribute('type', 'button');
mbtn.innerHTML = '&times';

var h4 = createEleWithClass('h4', 'modal-title');
h4.innerHTML = 'Modal Header';
mfooter.innerHTML = '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
header.append(h4, mbtn);
content.append(header, mbody, mfooter);
dialog.appendChild(content);
modal.appendChild(dialog);

var container = createEleWithClass('div', 'container');
var cardCol = createEleWithClass('div', 'card-columns');
container.append(modal, cardCol);
document.body.append(container);

var result = [];
var weatherResult = [];

// Getting RestAPI Data
function getRestData() {
    return new Promise((resolve, reject) => {
        (async () => {
            try {
                var data = await fetch('https://restcountries.eu/rest/v2/all');
                var jsonData = await data.json();
                result.push(jsonData);
                resolve(result);
            }
            catch (err) {
                console.log(err);
                reject(err);
            }
        })();
    });
}

getRestData().then((data) => {
    data[0].forEach((res) => {
        var card = createEleWithClass('div', 'card');
        var cardHeader = createEleWithClass('div', 'card-header');
        var cardbody = createEleWithClass('div', 'card-body text-center');
        var p = createEleWithClass('p', 'card-text');
        var btn = createEleWithClass('button', 'btn btn-default');
        btn.setAttribute('type', 'button');
        btn.setAttribute('id', 'myBtn');
        btn.innerHTML = 'Click for Weather';
        btn.setAttribute('onclick', `displayWeatherData('${res.capital}','${res.name}')`);
        btn.setAttribute('data-toggle', 'modal');
        btn.setAttribute('data-target', '#myModal');

        cardbody.append(p, btn);
        card.append(cardHeader, cardbody);
        cardCol.appendChild(card);

        cardHeader.innerHTML = res.name;

        var cardData =
            '<img src=' + res.flag + ' width="100%" height="20%"><br><br>' + 'Capital: ' + res.capital + '<br>' +
            'Latlon: ' + res.latlng + '<br>' +
            'Region: ' + res.region + '<br>' +
            'Currency Code: ' + res.currencies[0].code + '<br>' +
            'Currency Name: ' + res.currencies[0].name + '<br>' +
            'Currency Symbol: ' + res.currencies[0].symbol + '<br>';

        p.innerHTML = cardData;
    });
}).catch((err) => {
    console.log(err);
});


// Display country weather details
async function displayWeatherData(cityName,countryName) {
    try {
        var APIkey = 'e8a7acffe1db76fe417b6b1c33db93d7';
        var weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`);
        var jsonData = await weatherData.json();
        weatherResult = jsonData;
        document.querySelector('.modal-title').innerHTML = countryName + ' Weather Details';
        var weatherDetails = `Description = ${weatherResult.weather[0].description}<br>
        Temperature = ${weatherResult.main.temp}<br>
        Feels Like = ${weatherResult.main.feels_like}
        <br>Minimum Temperature = ${weatherResult.main.temp_min}
        <br>Maximum Temperature = ${weatherResult.main.temp_max}
        <br>Pressure = ${weatherResult.main.pressure}
        <br>Humidity = ${weatherResult.main.humidity}`;

        document.querySelector('.modal-body').innerHTML = weatherDetails;
    }
    catch (err) {
        console.log(err);
    }
};

// creating element and add class attribute to it.
function createEleWithClass(ele, className) {
    var k = document.createElement(ele);
    k.setAttribute('class', className);
    return k;
}

