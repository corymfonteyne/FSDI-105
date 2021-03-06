//create the user constructor
class User {
    constructor(fname, lname, email, age, address, password, passwordConfirmation, paymentMethod) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.age= age;
        this.address = address;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        this.paymentMethod = paymentMethod;
    }
}
function isValid(user){
    //return true  if the user is valid
    //return false if the user is not valid
    let valid=true;
    if(user.fname.length==0){
        valid=false;
        console.log("Please enter a valid first name");
    }
    if(user.lname.length==0){
        valid=false;
        console.log("Please enter a valid last name");
    }
    if (user.email.length==0){
        valid=false;
        console.log("please enter a valid email address");
    }
    if (user.age.length==0){
        valid=false;
        console.log("Please enter a valid age");
    }
    if (user.address.length==0){
        valid=false;
        console.log("Please enter a valid address");
    }
    if (user.password.length==0){
        valid=false;
        console.log("please enter a valid password");
    }
    if (user.passwordConfirmation.length==0){
        valid=false;
        console.log("Please enter a valid password confirmation");
    }
    if (user.paymentMethod.length==0){
        valid=false;
        console.log("Please enter a valid paymentMethod");
    }
    return valid;
}
function validatePassword(){
    console.log("Validating Password"); 
    let txtPass= $("#txtPassword");// this is the element (input)
    let password = txtPass.val();// this is the password inside of the element
    if (password.length<6){
        txtPass.css("backgroundColor", "red");//this jquery fn change the css
    }
    else{
        txtPass.css("backgroundColor", "green");// thisjquery fn change the css
    }
}
function passwordConfirmation(){
    let txtPass= $("#txtPassword").val();
    let txtPasswordConfirmation= $("#txtPasswordConfirmation").val();
    if (txtPass==txtPasswordConfirmation){
        console.log("password is not the same");
    }
    else{
        console.log("password is the same");
    }

}
//create the register function
function register() {
    //get the vaues from the inputs
    let userName =$("#txtFirstName").val();
    let userLname =$("#txtLastName").val();
    let userEmail =$("#txtEmail").val();
    let userAge = $("#numAge").val();
    let userAddress = $("#txtAddress").val();
    let userPassword = $("#txtPassword").val();
    let userPasswordConfirmation = $("#txtPasswordConfirmation").val();
    let userPaymentMethod = $("#txtPaymentMethod").val();
    
    //create the object
    let newUser=new User(userName, userLname, userEmail, userAge, userAddress, userPassword, userPasswordConfirmation, userPaymentMethod);
    //display the user on the console
    console.log(newUser);
    if(isValid(newUser)){
        saveUser(newUser);//this function is on the storeManager
    }
    clearInputs();
}
    
function clearInputs(){
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#txtEmail").val("");
    $("#numAge").val("");
    $("#txtAddress").val("");
    $("#txtPassword").val("");
    $("#txtPasswordConfirmation").val("");
    $("#txtPaymentMethod").val("");
}


function init() {
    //hide the userForm
    //hook events
    //show the userForm
    $("#newUser").on("click",function(){
        $("#userForm").slideDown(1200);
    }); 
    //hide the userForm
    $("#hideForm").on("click",function(){
        $("#userForm").slideUp(1200);
    });
    
    $("#userForm").hide();
    $("#txtPassword").keyup(validatePassword);
    $("#txtPassword").keyup(passwordConfirmation);
}

window.onload = init;    