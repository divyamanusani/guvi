var container=document.createElement('container');
var row1=document.createElement('row');
var col1=document.createElement('col-md-10');
var input1=document.createElement('input');
var input2=document.createElement('input');
var br1=document.createElement('br');
var br2=document.createElement('br');

input1.setAttribute('type','text');
input1.setAttribute('name','Random');
input1.setAttribute('id','random');
input1.setAttribute('class','input-lg');
input2.setAttribute('type','button');
input2.setAttribute('class','btn btn-success input-lg');
input2.setAttribute('value','Generate Random Number');
input2.setAttribute('onclick','generate()');

col1.append(input1,br1,br2,input2);
row1.append(col1);
container.append(row1);

var row1=document.createElement('row');
var col1=document.createElement('col-md-8');
var input1=document.createElement('input');
var input2=document.createElement('input');
var br1=document.createElement('br');
var br2=document.createElement('br');
var br3=document.createElement('br');
var br4=document.createElement('br');
var br=document.createElement('br');
var brz=document.createElement('br');
var para=document.createElement('p');
para.setAttribute('id','demo');

input1.setAttribute('type','date');
input1.setAttribute('name','dob');
input1.setAttribute('id','dateofbirth');
input1.setAttribute('class','input-lg');
input2.setAttribute('type','button');
input2.setAttribute('class','btn btn-info input-lg');
input2.setAttribute('value','Get Details');
input2.setAttribute('onclick','getdetails()');

col1.append(br,brz,input1,br1,br2,input2,br3,br4,para);
row1.append(col1);
container.append(row1);

document.body.append(container);

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
    var sec=(millisec/1000).toFixed(0);
    var min=(sec/60).toFixed(0);
    var hrs=(min/60).toFixed(0);
    var days=(hrs/24).toFixed(0);
    var months=(days/30).toFixed(0);
    var year=(months/12).toFixed(0);

    var str=`I am ${year} years ,<br>${months} months ,<br>${days} days, <br>
    ${hrs} hours, <br>${min} minutes, <br>${sec} seconds,<br> ${millisec} milliseconds old`;
document.getElementById('demo').innerHTML=str;

}

