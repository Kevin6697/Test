var saveObj={};
function loginData(){
    var loginErrors="Validation Errors : ";
    var email=document.getElementById("email").value;
    var password=document.getElementById("pwd").value;
    var emailRegex=/^[a-zA-Z0-9._-]+\@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;
    if(email==""){
        loginErrors+="<br>Email Required";
    }
    else if(emailRegex.test(email)==false){
        loginErrors+="<br>Enter Valid email";
    }
    else{
        saveObj['email']=email;
    }
    if(password==""){
        loginErrors+="<br>Password Required";
    }
    else{
        saveObj['password']=password;
    }
    if(loginErrors!="Validation Errors : "){
        document.getElementById('errorDisplay').innerHTML=loginErrors; 
    }
    else{
         document.getElementById('errorDisplay').innerHTML="";
         checkCredentials();
    }
}
function checkCredentials(){
    for (var index = 0; index < fetchData.length; index++) {
        if(fetchData[index].email == saveObj.email &&  fetchData[index].password == saveObj.password){ 
            localStorage.setItem("id",fetchData[index].id);
            localStorage.setItem("name",fetchData[index].name);
            localStorage.setItem("role",fetchData[index].role);
            localStorage.setItem("logindateandtime",new Date().toLocaleString());
            if(fetchData[index].role=="admin"){
                window.location.href="dashboard.html";
            }
            if(fetchData[index].role=="user"){
                window.location.href="subuser.html";
            }
        }
        else{
            document.getElementById('errorDisplay').innerHTML="Invalid Username and Password";
        }
    }
}

var fetchData=JSON.parse(sessionStorage.getItem("register"));
var validateAdmin=checkAdmin(); 
if(validateAdmin ==true){
        document.getElementById('register').style.display="none";
}
function loginCheck() {
    if(localStorage.length>0){
        if(localStorage.getItem("role")=="admin"){
            window.location.href="dashboard.html";
        }
        else{
            window.location.href="subuser.html";
        }
    }
}
loginCheck();
function checkAdmin(){
    var fetchData=JSON.parse(sessionStorage.getItem("register"));
    var tmp=false;
    for (var index = 0; index < fetchData.length; index++) {
        if(fetchData[index].role=="admin"){
            tmp=true;
            break;
        }
    }
    return tmp;
}