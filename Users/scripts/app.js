//create the user constructor
class User {
    constructor(fname, lname, email, age, address, password, passwordConfirmation,  paymentMethod) {
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
//create the register function
function register() {
    //get the vaues from the inputs
    let userFname =$("#txtFirstName").val();
    let userLname =$("#txtLastName").val();
    let userEmail =$("#txtEmail").val();
    let userAge = $("#numAge").val();
    let userAddress = $("#txtAddress").val();
    let userPassword = $("#txtPassword").val();
    let userPasswordConfirmation = $("#txtPasswordConfirmation").val();
    let userPaymentMethod = $("#txtPaymentMethod").val();
    
    //create the object
    let newUser=new User(userFname, userLname, userEmail, userAge, userAddress, userPassword, userPasswordConfirmation, userPaymentMethod);
    //display the user on the console
    console.log(newUser);
    saveUser(saveUser); 
    clearInputs();
}
function clearInputs(){
    let userFname =$("#txtFirstName").val("");
    let userLname =$("#txtLastName").val("");
    let userEmail =$("#txtEmail").val("");
    let userAge = $("#numAge").val("");
    let userAddress = $("#txtAddress").val("");
    let userPassword = $("#txtPassword").val("");
    let userPasswordConfirmation = $("#txtPasswordConfirmation").val("");
    let userPaymentMethod = $("#txtPaymentMethod").val("");
}

function init() {

}
window.onload = init;