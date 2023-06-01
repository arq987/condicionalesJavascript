function validarBelleza() {
    let belleza = document.getElementById("belleza").value;

    if (belleza == 1) {
        alert("Ciertamente")
    } else {
        alert("No te creo")
    }
}
function validarDivision() {
    let numero = document.getElementById("numero").value;
    if (numero % 2 === 0) {
        alert(numero + " es divisible entre dos (2)")
    } else {
        alert(numero + " no es divisible entre dos (2)")
    }
}
function validarNumero() {
    let numero = prompt("Digite un número")
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert(numero + " es un número par")
        } else {
            alert(numero + " es un número impar")
        }
    } else {
        alert("El carácter introducido no es un número")
    }
}
function validarPremio() {
    let premio = document.getElementById("premio").value;

    if (premio == 1000) {
        alert("Ganaste un premio")
    } else {
        alert("Lo sentimos, sigue participando")
    }
}
function validarNumeroMenor() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if (numero1 < numero2) {
        alert(numero1 + " es menor que " + numero2)
    } else {
        alert(numero2 + " es menor que " + numero1)
    }
}
function validarNumeroMayor() {
    let numero_1 = document.getElementById("numero_1").value;
    let numero_2 = document.getElementById("numero_2").value;
    let numero_3 = document.getElementById("numero_3").value;
    if ((numero_1 > numero_2) && (numero_2 > numero_3)) {
        alert(numero_1 + " es el número mayor")
    } else if (numero_2 > numero_1 && numero_2 > numero_3) {
        alert(numero_2 + " es el número mayor")
    } else if (numero_3 > numero_1 && numero_3 > numero_2) {
        alert(numero_3 + " es el número mayor")
    } else {
        alert(" Hay números iguales")
    }
}
