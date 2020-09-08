var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req= new XMLHttpRequest();
var url_str="https://dog.ceo/api/breeds/list/all";
req.open('GET',url_str);
req.send();

req.onload = function(){

    console.log("readyState = " + this.readyState + ", status = " + this.status);
    var data=JSON.parse(this.responseText);
    console.log(data);
    console.log(data.hound);
    console.log(data.mountain[0]);
}