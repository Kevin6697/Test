if(sessionStorage.getItem("register")==null){
    var registration =[];
    sessionStorage.setItem("register",JSON.stringify(registration));
}
var adminObj={};
function registerData(){
    var registrationErrors="Validation Errors : ";
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("pwd").value;
    var confPwd=document.getElementById("confpwd").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var tac=document.getElementById("tac");
    var nameRegex=/^[A-z]*$/;
    var emailRegex=/^[a-zA-Z0-9._-]+\@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;
    if(name==""){
        registrationErrors+="<br>Name Required";
    }
    else if(nameRegex.test(name)==false){
        registrationErrors+="<br>Enter Valid name";
    }
    else{
        adminObj['name']=name;
    }
    if(email==""){
        registrationErrors+="<br>Email Required";
    }
    else if(emailRegex.test(email)==false){
        registrationErrors+="<br>Enter Valid email";
    }
    else{
        adminObj['email']=email;
    }
    if(password==""){
        registrationErrors+="<br>Password Required";
    }
    else{
        adminObj['password']=password;
    }
    if(confPwd==""){
        registrationErrors+="<br>Confirm Password Required";
    }
    else if(confPwd != password){
        registrationErrors+="<br>Confirm Password doesn't match";
    }
    if(city=="Select City" || city==""){
        registrationErrors+="<br>City Required";
    }
    else{
        adminObj['city']=city;
    }    
    if(state=="Select State" || state==""){
        registrationErrors+="<br>State Required";
    }
    else{
        adminObj['state']=state;
    }
    if(tac.checked==false){
        registrationErrors+="Confirm Terms and conditions";
    }
    if(registrationErrors!="Validation Errors : "){
        document.getElementById('errorDisplay').innerHTML=registrationErrors; 
    }
     else{
         document.getElementById('errorDisplay').innerHTML="";
         adminObj['role']="admin";
         storeData();  
         window.location.href="login.html";
     }
}
function storeData(){
    var fetchData=JSON.parse(sessionStorage.getItem("register"));
    var tmp =fetchData.length+1;
    adminObj['id']=tmp;
    fetchData.push(adminObj);
    sessionStorage.setItem("register",JSON.stringify(fetchData));
}
function checkAdmin(){
    var fetchData=JSON.parse(sessionStorage.getItem("register"));
    for (var index = 0; index < fetchData.length; index++) {
        if(fetchData[index].role=="admin"){
          alert("Admin Already Exists"); 
          window.location.href="login.html";
        }
    }
}
checkAdmin();