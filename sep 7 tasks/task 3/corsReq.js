var req= new XMLHttpRequest();
var url_str="https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
req.open('GET',url_str);
req.setRequestHeader('Access-Control-Allow-Origin','*');

req.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        console.log(JSON.parse(result));
    }
};
req.send();