var boxSignUp = document.getElementById("formSignup");
var userName = document.getElementById("userName");
var emailSignup = document.getElementById("emailSignup");
var pwSignup = document.getElementById("pwSignup");
var register = document.getElementById("btnSignup");
let alertMessage = document.getElementById("alertMsg");
let navigateLogin= document.getElementById('signIn');
let errorMsg= document.querySelector('.errorMsg');
var registerList = [];





// local storage
if (localStorage.getItem("users") !== null) {
  registerList = JSON.parse(localStorage.getItem("users"));
}

// to save new user in array list
function createUser() {
  var user = {
    userName: userName.value,
    email: emailSignup.value,
    password: pwSignup.value,
  };


  if(emptySignup()===true){
    getAlertMsg('All inputs Required','red');
  }else{
    if(isAccountExist()===true){
      return true
    }else{
      if(validateEmail()===true&&validateName()===true&&validatePw()===true){
        registerList.push(user);
        localStorage.setItem('users',JSON.stringify(registerList))
        reset();
        getAlertMsg('Success','green');
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your Account has been saved',
          text: 'Success',
          showConfirmButton: false,
          timer: 2000
        })
        
        toSignin();
      }
      else{
        if(validateName()!==true){
                displayMsg('.errorName', `Your Username should be at least 5 characters, and accepts
                uppercase & lowercase letters, space and _`)
              }
              else if(validateName()===true){
                displayMsg('.errorName', '')
              }
              if(validateEmail()!==true){
                displayMsg('.errorEmail', `Invalid email address. Your email address can start with
                letters, and accepts numbers, uppercase & lowercase letters and
                special characters (_ - .)`)
                
              }
              else if(validateEmail()==true){
                displayMsg('.errorEmail' , '')
              }
              if(validatePw()!==true){
                displayMsg('.errorPassword', `Your Password must be at least 8 characters, and can have
                letters, special character (@ or _ or - only) or numbers.`)
                
              }
              else if(validateEmail==true){
                displayMsg('.errorPassword' , '')
              }
      }
    }
  }
}
register.addEventListener('click',createUser)


//  alerts message what error inputs
function getAlertMsg(text,color) {
  alertMessage.classList.replace("d-none", "d-block");
  alertMessage.innerHTML = text;
  alertMessage.style.color=color;
}



function isAccountExist() {
    for(let i = 0 ; i < registerList.length ; i++){
        if(registerList[i].email === emailSignup.value){
            return true;
        }
    }
}

function displayMsg(element, msg) {
  document.querySelector(element).innerHTML = msg;
}







// Empty all inputs
function reset() {
    userName.value = "";
    emailSignup.value = "";
    pwSignup.value = "";
}

// if empty Signup
function emptySignup() {
    if (userName.value == "" || emailSignup.value == "" || pwSignup.value == "") {
        return true;
    } else {
        return false;
    }
}


// from register to login
function toSignin(){
  window.location.href='login.html'
}
navigateLogin.addEventListener('click',toSignin)




// validation userName&&email&&passowrd


function validateName() {
  var regexName = /^[A-Za-z\s_]{3,}$/gm;
  return regexName.test(userName.value);
}

function validateEmail() {
  var regexEmail =
    /^[A-Za-z]{1,}[A-Za-z0-9_\-\.]{1,}[a-zA-Z0-9]{1,}(@)(gmail|yahoo|outlook)\.(com)$/gm;
  return regexEmail.test(emailSignup.value);
}

function validatePw() {
  var regexPassword = /[a-zA-Z0-9@_-]{8,}$/gm;
  return regexPassword.test(pwSignup.value);
}


