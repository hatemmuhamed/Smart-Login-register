let welcomeMessage = document.getElementById('welcomeMsg');
let buttonLogout = document.getElementById('btnLogout');



if(localStorage.getItem('userName') !== null){
    welcomeMessage.innerHTML = `welcome ${localStorage.getItem('userName')}`
}

function logout(){
    window.location.href='login.html'
    localStorage.removeItem('userName')
}



buttonLogout.addEventListener("click",logout);