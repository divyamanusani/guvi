var num1=parseFloat(prompt("Please enter num1:"));
var num2=parseFloat(prompt("Please enter num2:"));
operation =(oper,array) => {
	var result=array[oper](num1,num2);
	console.log(result);
}

add=(a,b) =>{
	return a+b;
}
 sub=(a,b)=> {
	return a-b;
}
mul =(a,b) => {
	return a*b;
}
div =(a,b)=> {
	return a/b;
}

var process=[add,sub,mul,div];

operation(0,process)
operation(1,process) 
operation(2,process)
operation(3,process)