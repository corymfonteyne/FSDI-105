//create the user constructor
class User {
    constructor(fname, lname, email, age, address, password, passwordConfirmation,  paymentMethod) {
        this.firstname = fname;
        this.lastname = lname;
        this.email = email;
        this.age= "";
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
    if (user.email.length==0){
        valid=false;
        console.log("please enter a valid email address");
    }
    if (user.password.length==0){
        valid=false;
        console.log("please enter a valid password");
    }
    if (user.firstname.length==0){
        valid=false;
        console.log("please enter your first name")
    }
    if (user.lastname.length==0){
        valid=false;
        console.log("please enter your last name")
    }
    if (user.age.length==0){
        valid=false;
        console.log("please enter your age") 
    }
    return valid;
}
//create the register function
function register() {
    //get the vaues from the inputs
    let userName =$("txtFirstName").val();
    let userLname =$("txtLastName").val();
    let userEmail =$("txtEmail").val();
    let userAge = $("numAge").val();
    let userAddress = $("txtAddress").val();
    let userPassword = $("txtPassword").val();
    let userPasswordConfirmation = $("txtPasswordConfirmation").val();
    let userPaymentMethod = $("txtPaymentMethod").val();
    
    //create the object
    let newUser=new User(userName, userLname,userEmail,userAge, userAddress, userPassword, userPasswordConfirmation, userPaymentMethod);
    //display the user on the console
    console.log(newUser);
    saveUser(saveUser); 
}
register();

function init() {

}
window.onload = init;