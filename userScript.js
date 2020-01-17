document.getElementById("updateUser").style.display="none";
if(sessionStorage.getItem("register")==null){
    var registration =[];
    sessionStorage.setItem("register",JSON.stringify(registration));
}
var userObj={};
var fetchData=JSON.parse(sessionStorage.getItem("register"));
function addUser(){
    var userErrors="Validation Errors : ";
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("pwd").value;
    var dob=document.getElementById("dob").value;
    var nameRegex=/^[A-z]*$/;
    var emailRegex=/^[a-zA-Z0-9._-]+\@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;
   
    if(name==""){
        userErrors+="<br>Name Required";
    }
    else if(nameRegex.test(name)==false){
        userErrors+="<br>Enter Valid name";
    }
    else{
        userObj['name']=name;
    }
    if(email==""){
        userErrors+="<br>Email Required";
    }
    else if(emailRegex.test(email)==false){
        userErrors+="<br>Enter Valid email";
    }
    else{
        userObj['email']=email;
    }
    if(password==""){
        userErrors+="<br>Password Required";
    }
    else{
        userObj['password']=password;
    }
    if(dob==""){
        userErrors+="<br>Date of Birth Required";
    }
    else{
        userObj['dob']=dob;
    }

    if(userErrors!="Validation Errors : "){
        document.getElementById('errorDisplay').innerHTML=userErrors; 
    }
     else{
         document.getElementById('errorDisplay').innerHTML="";
         userObj['role']="user";
         storeData();  
         window.location.href="user.html";
     }
}
function storeData(){
    var tmp =fetchData.length+1;
    userObj['id']=tmp;
    fetchData.push(userObj);
    sessionStorage.setItem("register",JSON.stringify(fetchData));
}
function displayData(){
    if(fetchData.length>0){
        var th="<th>Name</th><th>Email</th><th>Password</th><th>Date of Birth</th><th>Age</th><th colspan=2>Action</th>";
    }
    document.getElementById("dataDisplay").innerHTML=th;
    for(index=0;index<fetchData.length;index++){
        if(fetchData[index].role=="user"){
            document.getElementById("dataDisplay").border="1px";
            var row =dataDisplay.insertRow();
            var c1=row.insertCell();
            var c2=row.insertCell();
            var c3=row.insertCell();
            var c4=row.insertCell();
            var c5=row.insertCell();
            var c6=row.insertCell();
            var c7=row.insertCell();
            c1.innerHTML=fetchData[index].name;
            c2.innerHTML=fetchData[index].email;
            c3.innerHTML=fetchData[index].password;
            c4.innerHTML=new Date(fetchData[index].dob).toLocaleDateString();
            c5.innerHTML=calculateAge(new Date(fetchData[index].dob).getFullYear());
            c6.innerHTML="<input type=button value=edit onclick=displayDataforedit("+fetchData[index].id+");>";
            c7.innerHTML="<input type=button value=delete onclick=deleteUser("+fetchData[index].id+");>";
        }
    }
}
displayData();
function calculateAge(el) {
    return new Date().getFullYear() - el;
  }
function displayDataforedit(id){
    document.getElementById("updateUser").style.display="block";
    document.getElementById("addUser").style.display="none";
    for(index=1;index<fetchData.length;index++){
        if(fetchData[index].id == id){
            document.getElementById("upId").value=fetchData[index].id;
            document.getElementById("upName").value=fetchData[index].name;
            document.getElementById("upEmail").value=fetchData[index].email;
            document.getElementById("upPwd").value=fetchData[index].password;
            document.getElementById("upDob").value=fetchData[index].dob;
        }
    }
}
function editUserData(){
    var id=document.getElementById("upId").value;
    var name=document.getElementById("upName").value;
    var email=document.getElementById("upEmail").value;
    var password=document.getElementById("upPwd").value;
    var dob=document.getElementById("upDob").value;
    for(index=1;index<fetchData.length;index++){
        if(fetchData[index].id == id){
            fetchData[index].name=name;
            fetchData[index].email=email;
            fetchData[index].password=password;            
            fetchData[index].dob=dob;
        }
    }
    sessionStorage.setItem("register",JSON.stringify(fetchData));
    window.location.href="user.html";
}
function deleteUser(id){
    for(index=1;index<fetchData.length;index++){
        if(fetchData[index].id == id){
            fetchData.pop(id);
        }
        sessionStorage.setItem("register",JSON.stringify(fetchData));
    }  
    window.location.href="user.html";
}
if (localStorage.getItem("role") == null) {
    window.location.href = "login.html";
  } else if (localStorage.getItem("role") == "user") {
    window.location.href = "subuser.html";
  }