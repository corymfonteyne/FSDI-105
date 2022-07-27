function displayUsers(usersArray){
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];

        tr+=`
        <tr>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
        </tr>
        `;
        document.getElementById("user-table").innerHTML = tr;
    }
}
function init(){
    let usersArray = readUsers();
    displayUsers(usersArray);
}
window.onload = init;