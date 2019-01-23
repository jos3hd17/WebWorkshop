/* Login Actions for login.html */
document.getElementById('submit-button').addEventListener('click', function () {
    var email = document.getElementById('correo').value;
    var password =  document.getElementById('contrasenia').value;

    if (email == '' || password == '') {
        alert("Debes completar todos los campos para continuar")
    } else {
        window.location.href = "../main-menu/main-menu.html";
    }
})

function multiply(value1 = 1, value2 = 1) {

}

function sumAll(...elements){
    return elements.reduce();
}


sumAll(1, 2, 3, 4, 5); 

