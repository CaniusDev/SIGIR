const   btnSignIn = document.getElementById("sign-in"),
        btnSignUp = document.getElementById("sign-up"),
        formRegister = document.querySelector(".register"),
        formLogin = document.querySelector(".login");

btnSignIn.addEventListener('click', e => {
     formRegister.classList.add("hide");
     formLogin.classList.remove("hide");
     formRegister.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => input.value = '');

});

btnSignUp.addEventListener('click', e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
    formLogin.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => input.value = '');

});

function togglePassword(passwordId, showIconId, hideIconId) {
    var passwordInput = document.getElementById(passwordId);
    var showPasswordIcon = document.getElementById(showIconId);
    var hidePasswordIcon = document.getElementById(hideIconId);
    

    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
        showPasswordIcon.style.display = 'block'; 
        hidePasswordIcon.style.display = 'none'; 
    }

    else {
        passwordInput.type = 'password';
        showPasswordIcon.style.display = 'none'; 
        hidePasswordIcon.style.display = 'block'; 
    }
}
