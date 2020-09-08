
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var req= new XMLHttpRequest();
var url_str="http://api.openweathermap.org/data/2.5/weather?q=Tirupati,IN&APPID=69204f6dbdf2236812cf8653a217ac4a";
req.open('GET',url_str);

req.onload = function(){
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    var data = JSON.parse(this.responseText);
    console.log(data);
   
}
req.send();

