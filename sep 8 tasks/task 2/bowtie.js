var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(my_obj) {
 var objVal=[];
 objVal=Object.values(my_obj);
 console.log(objVal);
}

printAllValues(obj);
printAllKeys(obj);

function printAllKeys(my_obj){
    var objKeys=[];
    objKeys=Object.keys(my_obj);
    console.log(objKeys);
}