var arrOfNum = [20,10,30,5,7];

(function(arr){
    var sum = arr.reduce((a,b)=>{return a+b;});
    console.log(sum);
})(arrOfNum);