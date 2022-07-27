const KEY="user";
function saveUser(user){
    let oldData=readUsers();//getting localstorage data
    oldData.push(user);//add the new user
    let value = JSON.stringify(oldData);
    //send the user to the local storage
    localStorage.setItem(KEY, value);
}
function readUsers(){
    let data=localStorage.getItem(KEY);
    if(!data){//is empty?
        return[];
    }else{
        //we have data
        let list=JSON.parse(data);
        return list;//return objs
    }
}