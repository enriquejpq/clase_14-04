
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("#formulario input", "#formulario textarea");
    let edad = document.querySelector("input[type='number']").value;
    let email = document.querySelector("input[type='email']").value;
    let valido = true;
    let mensaje ="";

    //validar campos vacios
    inputs.forEach(function(input) {
        if(input.value.trim() === "") {
            valido = false;
            mensaje = "Todos los campos deben estar completos"
        }
    })
    
    //validar edad

    if(edad < 18) {
        valido = false;
        mensaje = "Debes tener al menos 18 años";
        console.log(">>>" + edad)
    }

    //validar correo
    if(!email.includes("@") || !email.includes(".")) {
        valido = false;
        mensaje = "correo inválido";
    }

    if (valido) {
        window.location.href = "valido.html"
    
    }else {
        alert(mensaje);
    }
});
