(function(n){
    
var oddArr=[];
    for(i=1;i<=n;i++){
        if(i%2!==0)
      oddArr.push(i);
    }
    console.log(oddArr.join());
})(10);