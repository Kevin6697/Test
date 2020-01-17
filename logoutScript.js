if(sessionStorage.getItem("logoutSession")==null){
    var logoutSession =[];
    sessionStorage.setItem("logoutSession",JSON.stringify(logoutSession));
}
var logoutSessionObj={};
if(localStorage.getItem('role')=="user"){
    localStorage.setItem("logoutdateandtime",new Date().toLocaleString());
    setValues();
    var logoutDetails=JSON.parse(sessionStorage.getItem("logoutSession"));
    logoutDetails.push(logoutSessionObj);
    console.log(logoutDetails);
    sessionStorage.setItem("logoutSession",JSON.stringify(logoutDetails));
    localStorage.clear();
    window.location.href="login.html";
}
else{
    localStorage.clear();
    window.location.href="login.html";  
}
function setValues(){
    logoutSessionObj['name']=localStorage.getItem('name');
    logoutSessionObj['logindateandtime']=localStorage.getItem('logindateandtime');
    logoutSessionObj['logoutdateandtime']=localStorage.getItem('logoutdateandtime');
}
