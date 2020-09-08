var xhr = new XMLHttpRequest();
var url_str="http://api.openweathermap.org/data/2.5/weather?q=Tirupati,IN&APPID=69204f6dbdf2236812cf8653a217ac4a";
xhr.open("GET", url_str);
 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        console.log(JSON.parse(result));
    }
};
 
xhr.send();