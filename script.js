const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");



registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});


loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
}); 



// Img inside input-box
let eyeclose = document.getElementById("eyeclose");
let password = document.getElementById("password");

eyeclose.onclick = function() {
    if (password.type == "password"){
        password.type = "text";
        eyeclose.src = "eye-open.png";
    }else{
    password.type = "password";
    eyeclose.src = "eye-close.png";
    }
}

// Img inside input-box2
let eyecloseII = document.getElementById("eyecloseII");
let signin_password = document.getElementById("signin-password");

eyecloseII.onclick = function() {
    if (signin_password.type == "password") {
        signin_password.type = "text";
        eyecloseII.src = "eye-open.png";
   }else{
        signin_password.type = "password";
        eyecloseII.src = "eye-close.png";
    }
}

// Popup Functionality
let popup = document.getElementById("popup");
function openPopup() {
    setTimeout(function() {
    popup.classList.add("open-popup");
        }, 4600); // Delay time in milliseconds (4600ms = 4.6 seconds)
    }
function closePopup() {
    popup.classList.remove("open-popup");
}

// Sign-Up Functionality (Already Implemented)
let url = 'https://script.google.com/macros/s/AKfycbzCcMOHUdpUY3dL7DEnNrXmnseXsNMPMfZvjwvhuy0Lf4TcgrNWJIGcbyXVyOgGuXjd/exec';
let form = document.getElementById('signUpForm');
form.addEventListener("submit", (e) => {
    e.target.btn.innerHTML = "Submitting data...";
    let d = new FormData(form);
    fetch(url, { method: 'POST', body: d })
        .then((res) => res.text())
        .then((finalRes) => {
            e.target.btn.innerHTML = "Submit";
            document.getElementById("res").innerHTML = finalRes;
            form.reset();
            setTimeout(() => {
                document.getElementById("res").innerHTML = '';
            }, 5000)
        })
    e.preventDefault();
});

// Log-in Functionality
function login(){
    let Email=document.getElementById("signin-email").value;
    let Password=document.getElementById("signin-password").value;
    let text_show=document.getElementById("text_show");
    

    //E-mail and Password of the website
    let website_email="bazalsarfraz7863@gmail.com";
    let website_password="bazaluj999";

    if(Email==website_email && Password==website_password){
        window.location.href = 'links.html';
        text_show.innerHTML="Login Successful";
        document.getElementById("signInForm").reset();
        document.getElementById("submit").disabled=true;
        setTimeout(() => {
            text_show.innerHTML="Suggestion Text";
        }, 10000)
    }

    

    else if(Email=="" && Password=="")
    {
        alert("Please enter email and password")
        text_show.innerHTML="Please enter email and password";
    }

    else if(Email=="")
    {
        alert("Please enter email")
        text_show.innerHTML="Please enter email";
    }

    else if(Password=="")
    {
        alert("Please enter password")
        text_show.innerHTML="Please enter password";
    }

    else if(Email!=website_email)
    {
        alert("Invalid Email")
        text_show.innerHTML="Invalid Email";
        document.getElementById("signin-email").style.border = "2px solid red"
    }

    else if(Password!=website_password)
    {
        alert("Invalid Password")
        text_show.innerHTML="Invalid Password";
        document.getElementById("signin-password").style.border = " 2px solid red"
    }

    else if(Email!=website_email && Password!=website_password)
    {
        alert("Invalid Email or Password")
        text_show.innerHTML="Invalid Email or Password";
        document.getElementById("signin-email").style.border = "2px solid red"
        document.getElementById("signin-password").style.border = "2px solid red"
    }

    else if(Email==website_email && Password==website_password)
    {
        alert("Login Successful")
        text_show.innerHTML="Login Successful";
        document.getElementById("signin-email").style.border = " 2px solid green"
        document.getElementById("signin-password").style.border = "2px solid green"
    }
    
    
}
