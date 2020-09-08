var names = ["John", "Peter", "Clark", "Harry", "John", "Alice",'Peter'];
var uniqueNames=function(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
};

console.log(uniqueNames(names));