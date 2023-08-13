let inputEmailLogin = document.getElementById("emailLogin");
let inputPasswordLogin = document.getElementById("pwLogin");
let buttonLogin = document.getElementById("btnLogin");
let alertMessage = document.getElementById("alertMsg");
let navigateSignup = document.getElementById('signUp');
let registerList = [];


if(localStorage.getItem('users') !== null){
    registerList =JSON.parse(localStorage.getItem('users'))
}


function login() {
    if(checkEmpty() === true)
    {
        getAlertMsg('All inputs required' ,'red')
    }
    else
    {
        if(checkInputsLogin() === true)
        {
            window.location.href='home.html';         
        }
        else 
        {
            getAlertMsg('Email or Password correct', 'red')
        }
    }
    
}


// check inputs are required or no 
function checkInputsLogin() {
    for(let i = 0 ; i < registerList.length ; i++){
        if(registerList[i].email === inputEmailLogin.value && registerList[i].password === inputPasswordLogin.value){
            localStorage.setItem('userName', registerList[i].userName)
            return true;
        }
    }


  }
buttonLogin.addEventListener("click", login);


// alerts message
function getAlertMsg(text,color) {
    alertMessage.classList.replace("d-none", "d-block");
    alertMessage.innerHTML = text;
    alertMessage.style.color=color;
  }

// empty inputs
  function checkEmpty() {
    if (inputEmailLogin.value == "" || inputPasswordLogin.value == "") {
        return true;
    } else {
        return false;
    }
}



// locate from login to signup
function signup() {
    window.location.href='register.html'
}
navigateSignup.addEventListener('click',signup)