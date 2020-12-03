var mail = document.getElementById("email");
var password2 = document.getElementById("password2");
var table = document.getElementById("content");
var warning = document.getElementById("warning");
var check = function()
{if (JSON.parse(localStorage.getItem("userData")))
    {
        var userArray = JSON.parse(localStorage.getItem("userData"));
        for (var i=0 ; i<userArray.length ; i++)
        {
            if(userArray[i].email==mail.value & userArray[i].password==password2.value)
            window.location.href = "../html/index.html";
            else{
                warning.style.display="inline";
                
            }
        }
    }
else {
    warning.style.display="inline";

}}
var btn = document.getElementById("loginBtn");
btn.addEventListener("click",check);