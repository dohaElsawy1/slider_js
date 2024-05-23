/** name */
var name1 = document.getElementById("name1");
var span1 = document.getElementsByTagName("span")[0];

function name2(){
    if(name1.value.length >=3){
        name1.style.border="5px solid green";
        span1.style.display="none"
    } else {
        name1.style.border="5px solid red"
        span1.style.display="block";
    }
}
name1.addEventListener("input", name2)
   

/** email */
var email=document.getElementById("email");
var span2 = document.getElementsByTagName("span")[1];
var EmailRegex = /^\w{3}@\d{3}.com$/;

function email1(){
    if(email.value.match(EmailRegex)){
    email.style.border="5px solid green";
    span2.style.display="none"
}else {
    email.style.border="5px solid red"
    span2.style.display="block";
}
}

email.addEventListener("input", email1)

/** password */
var password=document.getElementById("password");
var span3=document.getElementsByTagName("span")[2];

function password1(){
    if(password.value.length >=8){
        password.style.border="5px solid green";
        span3.style.display="none"
    } else {
        password.style.border="5px solid red"
        span3.style.display="block";
    }
}

password.addEventListener("input", password1)
    
    


/** gender */


var gender=document.getElementsByName("gender");
var span4=document.getElementsByTagName("span")[3];
var male = document.getElementById("male");
var female = document.getElementById("female");
function radioChecked(){
    // console.log(span4,male,female)
    if( male.checked || female.checked){
        span4.style.display="none"
    } else{
        span4.style.display="block"
    
    } 
}
gender[0].addEventListener("submit",radioChecked);
gender[1].addEventListener("submit",radioChecked);

 


/** sports */
var sports = document.getElementsByName("Sports");
var span5=document.getElementsByTagName("span")[4];
var tennis=document.getElementById("tennis");
var running=document.getElementById("running");
var football=document.getElementById("football");

function checkBox(){
    if(tennis.checked && running.checked){
        span5.style.display="none"
    }
    else if(tennis.checked && football.checked){
        span5.style.display="none"
    }
    else if(running.checked && football.checked){
        span5.style.display="none"
    }
    else{
        span5.style.display="block"
    }
}
tennis.addEventListener("submit",checkBox);
running.addEventListener("submit",checkBox);
football.addEventListener("submit",checkBox);

function submit(){
    radioChecked();
    password1();
    email1();
    name2();
    checkBox();
}

/**---------------------- */
var image1 = document.images[0];
var images = ["./imgs/3.jpeg","./imgs/4.jpeg","./imgs/5.jpeg","./imgs/6.jpeg"]
var index = 0, x;
function next(){
    index ++;
    if ( index >=images.length){
    index = 0;
    }
    image1.setAttribute("src",images[index])
    image1.getAttribute(images[index])

}

function previous(){
    index --;
    if ( index < 0) {
    index = images.length - 1  
    }
    
    image1.setAttribute("src",images[index])
    image1.getAttribute(images[index])

}

function playSlider() {
    x = setInterval(next, 2000); 
}

function stopSlider() {
    clearInterval(x);
}