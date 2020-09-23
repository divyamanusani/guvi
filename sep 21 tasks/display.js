
var numArr=[];
var num;
function generate() {
var min=10000000;
var max=99999999;

    num= Math.floor(Math.random() * (max - min + 1)) + min;
    if(!numArr.includes(num)){
    numArr.push(num);
    document.getElementById('random').value=num;
    }
}

function getdetails(){
    var dob=document.getElementById('dateofbirth').value;
    var dateOfBirth = Date.parse(dob);//in millisec from January 1, 1970
    var todayDate = Date.now(); // milliseconds
    var millisec=todayDate-dateOfBirth;
    var sec=(millisec/1000).toFixed(2);
    var min=(sec/60).toFixed(2);
    var hrs=(min/60).toFixed(2);
    var days=(hrs/24).toFixed(2);
    var months=(days/30).toFixed(2);
    var year=(months/12).toFixed(2);

    var str=`I am ${year} years ,<br>${months} months ,<br>${days} days, <br>
    ${hrs} hours, <br>${min} minutes, <br>${sec} seconds,<br> ${millisec} milliseconds old`;
document.getElementById('demo').innerHTML=str;

}

