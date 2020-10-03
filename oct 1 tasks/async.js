
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
mfooter.innerHTML = '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
header.append(h4, mbtn);
content.append(header, mbody, mfooter);
dialog.appendChild(content);
modal.appendChild(dialog);

var container = createEleWithClass('div', 'container');
container.append(modal);
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
    data[0].pop();
    var index=0;
    var bigData = data[0];
    for (var i = 0; i < bigData.length; i = i + 3) {
        var row = createEleWithClass('div', 'row');

 
        for (var j = 1; j <= 3; j++) {
            var col = createEleWithClass('div', 'col-lg-4 col-sm-12');
            var card = createEleWithClass('div', 'card-flex border mt-3 mb-3');
            var cardHeader = createEleWithClass('div', 'card-header');
            var cardbody = createEleWithClass('div', 'card-body text-center');
            var p = createEleWithClass('p', 'card-text');
            var btn = createEleWithClass('button', 'btn btn-default');
            btn.setAttribute('type', 'button');
            btn.setAttribute('id', 'myBtn');
            btn.innerHTML = 'Click for Weather';
            btn.setAttribute('onclick', `displayWeatherData('${bigData[index].capital}','${bigData[index].name}')`);
            btn.setAttribute('data-toggle', 'modal');
            btn.setAttribute('data-target', '#myModal');

            cardbody.append(p, btn);
            card.append(cardHeader, cardbody);
            col.appendChild(card);

            cardHeader.innerHTML = bigData[index].name;

            var cardData =
                '<img src=' + bigData[index].flag + ' width="100%"><br><br>' + 'Capital: ' + bigData[index].capital + '<br>' +
                'Latlon: ' + bigData[index].latlng + '<br>' +
                'Region: ' + bigData[index].region + '<br>' +
                'Country Code: ' + bigData[index].currencies[0].code + '<br>' +
                'Currency Name: ' + bigData[index].currencies[0].name + '<br>' +
                'Currency Symbol: ' + bigData[index].currencies[0].symbol + '<br>';

            p.innerHTML = cardData;
            row.appendChild(col);
            index++;
        }
        container.appendChild(row);    
    }
}).catch((err) => {
    console.log(err);
});


// Display country weather details
async function displayWeatherData(cityName, countryName) {
    try {
        var APIkey = 'e8a7acffe1db76fe417b6b1c33db93d7';
        var weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`);
        var jsonData = await weatherData.json();
        weatherResult = jsonData;
        document.querySelector('.modal-title').innerHTML = countryName + ' Weather Details';
        var weatherDetails = `Description = ${weatherResult.weather[0].description}<br>
        Temperature = ${weatherResult.main.temp} &#8451;<br>
        Feels Like = ${weatherResult.main.feels_like} &#8451;
        <br>Minimum Temperature = ${weatherResult.main.temp_min} &#8451;
        <br>Maximum Temperature = ${weatherResult.main.temp_max} &#8451;
        <br>Pressure = ${weatherResult.main.pressure}
        <br>Humidity = ${weatherResult.main.humidity}`;
        console.log(cityName);
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

