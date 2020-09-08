var arr = [
    [
        ['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']
    ],
    [
        ['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']
    ]
];


function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    var emp_obj = {};

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            emp_obj[arr[i][j][0]] = arr[i][j][1];
        }
        tranformEmployeeList.push(emp_obj);

    }


    return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));
