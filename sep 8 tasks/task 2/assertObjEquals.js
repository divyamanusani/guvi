function assertObjectsEqual(obj1,obj2){
    var a = JSON.stringify(obj1);
    var b = JSON.stringify(obj2);
    if(a==b)
    return true;
    return false;
}

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
console.log(assertObjectsEqual(expected,actual));

expected = {foo: 6, bar: 5};
actual = {foo: 5, bar: 6};
console.log(assertObjectsEqual(expected,actual));
