function login(){
    console.log("Login successful");    
    //get the values from the email and password fields
    let txtPass=$("#txtPassword").val();
    let userEmail=$("#userEmail").val();

    //use a flag
let flag = true;
    //get the users from the localStorage
    let users=readUsers();

    //travel the user list
    for(let i=0; i<users.length; i++){
        //get the user
        let user = users[i];
        //compare the input values with the values from the LS
        if(user.email==userEmail && user.password==txtPass){
            
            window.location="users.html";
        }else{
            flag=false
        }
    }
    if(!flag){
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide"); 
        },3000);
    }
}

function init(){
    $("#LoginBtn").click(login)
}
window.onload=init
        