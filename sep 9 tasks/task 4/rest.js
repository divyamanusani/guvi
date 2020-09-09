

//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var bigdata;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");


xhr.onreadystatechange = function () {
    //console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        bigdata = JSON.parse(result);
    }

    // Get the countries in asia - filter 
    var asia_countries = bigdata.filter((data) => data.region === 'Asia');
    asia_countrynames = asia_countries.map(country => country.name);
    console.log('All countryNames in Asia=');
    console.log(asia_countrynames);

    //Get the countries with population less than 2L - fliter
    var population = bigdata.filter(country => country.population < 200000);
    leastPopulationCountries = population.map(country => 'name =' + country.name + ',population=' + country.population);
    console.log('Least population countries are');
    console.log(leastPopulationCountries);

    //Bumpup the current population of all the counteirs by 1L - Map
    new_population = bigdata.map(country => country.population += 100000);
    console.log('Increased population of all countries');
    console.log(bigdata.map((country, index) => 'name =' + country.name + ',population=' + new_population[index]));

    // convert all the names in capital - map
    var capital_Countries = bigdata.map(country => country.name.toUpperCase());
    console.log('Countries displayed in capital letters');
    console.log(capital_Countries);

    // print following details name , capital , flag - foreach,filter
    var newData = [];

    bigdata.forEach((country) => {
        newData.push({
            name: country.name,
            capital: country.capital,
            flag: country.flag
        });
    });
    console.log('name, capital, flag of countries')
    console.log(newData);

    // Print the total population of the countries - reduce
    var total_population = bigdata.reduce((tot, country) => tot + country.population);
    console.log('Total population of all countries=');
    console.log(total_population);

    // Print the total population of the countries in asia - filter & reduce
    var asiaCountries = bigdata.filter((country) => country.region === 'Asia');
    var population = asiaCountries.map((country) => country.population);
    console.log('Total population in ASia:');
    console.log(population.reduce((tot, popu) => tot + popu));

};

xhr.send();