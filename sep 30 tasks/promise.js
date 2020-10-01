var container = createEleWithClass('div', 'container');
var cardCol = createEleWithClass('div', 'card-columns');
container.append(cardCol);
document.body.append(container);

let bigData = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        var bigData = [];
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                bigData = JSON.parse(xhr.response);
                resolve(bigData);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.send();
    });
};

bigData().then((data) => {
    console.log('data=', data);
    for (i = 0; i < data.length-1; i++) {
        var card = createEleWithClass('div', 'card');
        var cardHeader = createEleWithClass('div', 'card-header');
        var cardbody = createEleWithClass('div', 'card-body text-center');
        var p = createEleWithClass('p', 'card-text');
        cardbody.appendChild(p);
        card.append(cardHeader,cardbody);
        cardCol.appendChild(card);

        cardHeader.innerHTML=data[i].name;

        var cardData='Capital: '+data[i].capital+'<br>'+
        'Latlon: '+data[i].latlng+'<br>'+
        'Flag: '+data[i].flag+'<br>'+
        'Region: '+data[i].region+'<br>'+
        'Currency Code: '+data[i].currencies[0].code+'<br>'+
        'Currency Name: '+data[i].currencies[0].name+'<br>'+
        'Currency Symbol: '+data[i].currencies[0].symbol;

        p.innerHTML=cardData;
    }
}).catch((error)=>{
    console.log(error);
});


function createEleWithClass(ele, className) {
    var k = document.createElement(ele);
    k.setAttribute('class', className);
    return k;
}