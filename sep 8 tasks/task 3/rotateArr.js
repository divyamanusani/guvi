var arr=['abc','ef','ij','klmn','op'];
var k = 4;
var rotatedArr=function(arr,k){
    for(i=0;i<k;i++){
        arr.push(arr[i]);
    }
   return arr.slice(k);
}
console.log(rotatedArr(arr,k));