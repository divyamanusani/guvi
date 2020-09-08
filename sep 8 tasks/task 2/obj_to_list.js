var obj = { name: 'ISR', age: 35, role: 'Scientist' };

function convertObjectToList(myobj) {
    var objArr = [];

    var count_keys = Object.keys(myobj).length;
    var keys = Object.keys(myobj);
    var val = Object.values(myobj);

    for (i = 0; i < count_keys; i++) {
        objArr[i] = [];
        objArr[i].push(keys[i], val[i]);
    }
    
    console.log(objArr);
}

convertObjectToList(obj);
