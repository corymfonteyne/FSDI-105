const KEY="user";
function saveUser(userObj){
    let oldData=readUsers();//getting localstorage data
    oldData.push(userObj);//add the new user
    let value= JSON.stringify(userObj);
    //send the user to the local storage
    localStorage.setItem(KEY, value);
}
function readUsers(){
    let data=localStorage.getItem(KEY);
    console.log(data);//JSON
    if(!data){//is empty?
        return[];
    }else{
        //we have data
        let list=JSON.parse(data);
        return list;//return objs
    }
}