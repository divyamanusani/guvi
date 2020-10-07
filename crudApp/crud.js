//create:post
// read :get
//update:put/patch
//delete:delete
var count = 0;
async function addData() {
    // console.log(event);
    // event.preventDefault();
    var data = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value
    }


    var postData = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/users', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })

    var postRes = await postData.json();
    console.log('post=' + postRes);
    getUsers();

}

async function getUsers() {
    var userReq = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/users');
    var userData = await userReq.json();
    console.log(userData);
    fillData(userData);
}

function fillData(userData) {
    console.log(userData);
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
        tdEdit.setAttribute('onclick', "getRow(" + user.id + ")");
        var tdDel = document.createElement('td');
        var editBtn = document.createElement('button');
        editBtn.setAttribute('id', 'editbutton');

        var delBtn = document.createElement('button');
        delBtn.setAttribute('id', 'deletebutton');
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
    alert(id);
}



getUsers();