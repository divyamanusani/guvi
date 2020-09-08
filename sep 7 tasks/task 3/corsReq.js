var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req= new XMLHttpRequest();
var url_str="https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
req.open('GET',url_str);
req.setRequestHeader('Access-Control-Allow-Origin','*');
req.send();

req.onload = function(){
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    var data=JSON.parse(this.responseText);
    console.log(data);
    
}