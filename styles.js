
function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado; 
}

function sumar() {
    let numero1 = +document.getElementByid("campo1").value;
    let numero2 = +document.getElementByid("campo2").value;
    mostrarResultado(numero1 + numero2)
}