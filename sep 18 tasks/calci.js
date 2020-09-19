 
function display(val) 
{ 
    document.getElementById("calciInput").value+=val;
} 
  
function solve() 
{ 
    let a = document.getElementById("calciInput").value ;
    let val = eval(a); 
    document.getElementById("calciInput").value = val; 
} 

function reset() 
{ 
    document.getElementById("calciInput").value = "";
} 


