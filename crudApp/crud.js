//create:post
// read :get
//update:put/patch
//delete:delete
var userList = [];
var isEdit = false;
var selectedRow = null;
var todeleteRow = null;
async function addData() {
    var data = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value
    }

    if (isEdit) {
        var postData = await fetch("https://5f7b044f40abc60016472b2c.mockapi.io/users/" + selectedRow, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    else {
        var postData = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/users', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

    }

    var postRes = await postData.json();
    console.log('post=' + postRes);
    isEdit = false;
    getUsers();

}

async function getUsers() {
    var userReq = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/users');
    var userData = await userReq.json();
    console.log(userData);
    fillData(userData);
}

function fillData(userData) {
    userList = userData;
    console.log(userList);
    document.getElementById('userTable').innerHTML = `
    <tr>
    <th>FirstName</th>
    <th>LastName</th>
</tr>`;
    userData.forEach((user) => {
        var tr = document.createElement('tr');
        var tdfname = document.createElement('td');
        var tdlname = document.createElement('td');
        var tdEdit = document.createElement('td');

        var tdDel = document.createElement('td');
        var editBtn = document.createElement('button');
        editBtn.setAttribute('onclick', "getRow(" + user.id + ")");
        var delBtn = document.createElement('button');
        delBtn.setAttribute('id', 'deletebutton');
        delBtn.setAttribute('onclick', "deleteRow(" + user.id + ")");
        editBtn.innerHTML = "Edit";
        delBtn.innerHTML = 'Delete';
        tdfname.innerHTML = user.fname;
        tdlname.innerHTML = user.lname;
        tdEdit.appendChild(editBtn);
        tdDel.appendChild(delBtn);
        tr.append(tdfname, tdlname, tdEdit, tdDel);
        document.getElementById('userTable').appendChild(tr);

    });

}

function getRow(id) {
    console.log(id);
    isEdit = true;
    var i;
    userList.forEach((user,index) => {
        console.log(user.id);
        if (id==user.id) {
            selectedRow = user.id;
            i=index;
        }
    });
    console.log('id='+id);
    console.log('i='+i);
    console.log('selectedRow='+selectedRow);
    document.getElementById('fname').value = userList[i].fname;
    document.getElementById('lname').value = userList[i].lname;
}

async function deleteRow(id) {
    console.log(id);

    todeleteRow = id;
    var deleteR = await fetch("https://5f7b044f40abc60016472b2c.mockapi.io/users/" + todeleteRow, {
        method: "DELETE",
    })
    getUsers();

}



getUsers();