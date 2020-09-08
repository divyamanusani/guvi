var xhr = new XMLHttpRequest();
xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        console.log(JSON.parse(result));
    }
};
 
xhr.send();