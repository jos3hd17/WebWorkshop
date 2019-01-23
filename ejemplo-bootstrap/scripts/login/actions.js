/* Login Actions for login.html */
document.getElementById('login-btn').addEventListener('click', function () {
    var email = document.forms['form-login']['email'].value;
    var password = document.forms['form-login']['password'].value;

    if (email == '' || password == '') {
        alert("Debes completar todos los campos para continuar")
    } else {
        console.log(email);
        console.log(password);
        window.location.href = "/main.html";
    }
})