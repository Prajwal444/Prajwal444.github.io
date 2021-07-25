var sindex = 0;
slideshow();

function slideshow(){
var i;
var s=document.getElementsByClassName('slide'); 
var count=s.length;

for(i=0; i<count; i++)
{
s[i].display="none";
}
sindex++;
if(sindex>count)
{
sindex=1;
}
s[sindex-1].style.display="block";
setTimeout(slideshow, 2000); //1000ms=1s
}
var login=document.getElementById('login');

var model=document.getElementById('model');

var close=document.getElementById('close');

login.onclick=function(){ model.style.display="block";

}

close.onclick=function(){ model.style.display="none";

}

window.onclick=function(e) {

if(e.target==model)

{
model.style.display="none";
}



}

function myLogin() {
    var email= document.getElementById("email");
    var pass= document.getElementById("pass");

if(email.value=="@gmail.com")
{
    if(pass.value=="123456")
    {
        alert("Welcome to my page")
    }
    else{
        alert("Incorrect password")
    }
    }
    else {
        alert("Email is not registered with us")
    }
}







