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
    if (numero_1 > numero_2 && numero_1 > numero_3) {
        alert("El número mayor es el primer numero digitado, el Nº: " + numero_1);
    } else if (numero_2 > numero_1 && numero_2 > numero_3) {
        alert("El número mayor es el segundo número digitado, el Nº: " + numero_2);
    } else if (numero_3 > numero_1 && numero_3 > numero_2) {
        alert("El número mayor es el tercer número digitado, el Nº: " + numero_3);
    } else if (numero_1 === numero_2 && numero_1 > numero_3) {
        alert("El primer número digitado: " + numero_1 + " y el segundo número digitado: " + numero_2 + " son iguales y mayores que el tercer número digitado: " + numero_3);
    } else if (numero_1 === numero_3 && numero_1 > numero_2) {
        alert("El primer número digitado: " + numero_1 + " y el tercer número digitado: " + numero_3 + " son iguales y mayores que el segundo número digitado: " + numero_2);
    } else if (numero_2 === numero_3 && numero_2 > numero_1) {
        alert("El segundo número digitado: " + numero_2 + " y el tercer número digitado: " + numero_3 + " son iguales y mayores que el primer número digitado: " + numero_1);
    } else {
        alert("Los tres números son iguales");
    }
}
function validarDiaSemana() {

    let diaSemana = document.getElementById("diaSemana").value;

    if (diaSemana.toLowerCase() === "lunes") {
        alert("El día es Lunes");
    } else if (diaSemana.toLowerCase() === "viernes") {
        alert("El día es Viernes");
    } else if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "sabado") {
        alert("El día es Sábado");
    } else if (diaSemana.toLowerCase() === "domingo") {
        alert("el día es Domingo");
    } else if (diaSemana.toLowerCase() === "martes" || diaSemana.toLowerCase() === "miercoles" || diaSemana.toLowerCase() === "miércoles" || diaSemana.toLowerCase() === "jueves") {
        alert("El día digitado no es Lunes, Viernes, Sábado o Domingo");
    } else {
        alert("Lo digitado no corresponde a un día de la semana");
    }
}
function validarCalificacion() {
    let valorCalificacion = parseInt(document.getElementById("valorCalificacion").value);
  
    if (valorCalificacion >= 1 && valorCalificacion <= 10) {
      if (valorCalificacion < 6) {
        alert("La calificación es: Reprobado");
      } else if (valorCalificacion >= 6 && valorCalificacion <= 8) {
        alert("La calificación es: Regular");
      } else if (valorCalificacion === 9) {
        alert("La calificación es: Bien");
      } else {
        alert("La calificación es: Excelente");
      }
    } else {
      alert("Error: la calificación debe estar entre los números 1 y 10.");
    }
  }
  function calcularHelado() {
    let topping = document.getElementById("topping").value;
    let precioHelado = 50; 
  
    if (topping.toLowerCase() === "oreo") {
        toppingOreo = precioHelado + 10;
        alert("El precio del helado con topping de Oreo es: " + toppingOreo + " MXN")
    } else if (topping.toLowerCase() === "kitkat") {
        toppingKitkat = precioHelado + 15;
        alert("El precio del helado con topping de Kitkat es: " + toppingKitkat + " MXN")
    } else if (topping.toLowerCase() === "brownie") {
        toppingBrownie = precioHelado + 20;
        alert("El precio del helado con topping de Brownie es: " + toppingBrownie + " MXN")
    } else {
      alert("No tenemos este topping, lo sentimos. El precio de su helado sin topping es: " + precioHelado + " MXN");
    }
  }
  function validarCosto () {

    let programa = document.getElementById("programa").value;
    let beca = document.getElementById("beca").value;
    let costoCourse = 4999;
    let costoCarrera = 3999;
    let costoMaster = 2999;
    let duracionCourse = 2;
    let duracionCarrera = 6;
    let duracionMaster = 12;
    let becaFacebook = 0.2;
    let becaGoogle = 0.15;
    let becaJesua = 0.5

    if (programa == 1 && beca == 1){
        courseCostoDescuentoMensual = (costoCourse - (costoCourse * becaFacebook)) / duracionCourse;
        courseCostoTotalMensual = costoCourse / duracionCourse;
        alert("El Course al mes con descuento por beca Facebook es: " + courseCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo del Course al mes sin descuento es: " + courseCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Course es: " + costoCourse + " MXN");
    } else if (programa == 1 && beca == 2){
        courseCostoDescuentoMensual = (costoCourse - (costoCourse * becaGoogle)) / duracionCourse;
        courseCostoTotalMensual = costoCourse / duracionCourse;
        alert("El Course al mes con descuento por beca Google es: " + courseCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo del Course al mes sin descuento es: " + courseCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Course es: " + costoCourse + " MXN");
    } else if (programa == 1 && beca == 3){
        courseCostoDescuentoMensual = (costoCourse - (costoCourse * becaJesua)) / duracionCourse;
        courseCostoTotalMensual = costoCourse / duracionCourse;
        alert("El Course al mes con descuento por beca Jesua es: " + courseCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo del Course al mes sin descuento es: " + courseCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Course es: " + costoCourse + " MXN");
    } else if (programa == 2 && beca == 1){
        carreraCostoDescuentoMensual = (costoCarrera - (costoCarrera * becaFacebook)) / duracionCarrera;
        carreraCostoTotalMensual = costoCarrera / duracionCarrera;
        alert("La Carrera al mes con descuento por beca Facebook es: " + carreraCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo de la Carrera al mes sin descuento es: " + carreraCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total de la Carrera es: " + costoCarrera + " MXN");
    } else if (programa == 2 && beca == 2){
        carreraCostoDescuentoMensual = (costoCarrera - (costoCarrera * becaGoogle)) / duracionCarrera;
        carreraCostoTotalMensual = costoCarrera / duracionCarrera;
        alert("La Carrera al mes con descuento por beca Google es: " + carreraCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo de la Carrera al mes sin descuento es: " + carreraCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total de la Carrera es: " + costoCarrera + " MXN");
    } else if (programa == 2 && beca == 3){
        carreraCostoDescuentoMensual = (costoCarrera - (costoCarrera * becaJesua)) / duracionCarrera;
        carreraCostoTotalMensual = costoCarrera / duracionCarrera;
        alert("La Carrera al mes con descuento por beca Jesua es: " + carreraCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo de la Carrera al mes sin descuento es: " + carreraCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total de la Carrera es: " + costoCarrera + " MXN");
    }else if (programa == 3 && beca == 1){
        masterCostoDescuentoMensual = (costoMaster - (costoMaster * becaFacebook)) / duracionMaster;
        masterCostoTotalMensual = costoMaster / duracionMaster;
        alert("El Master al mes con descuento por beca Facebook es: " + masterCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo del Master al mes sin descuento es: " + masterCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Master es: " + costoMaster + " MXN");
    } else if (programa == 3 && beca == 2){
        masterCostoDescuentoMensual = (costoMaster - (costoMaster * becaGoogle)) / duracionMaster;
        masterCostoTotalMensual = costoMaster / duracionMaster;
        alert("El Master al mes con descuento por beca Google es: " + masterCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo del Master al mes sin descuento es: " + masterCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Master es: " + costoMaster + " MXN");
    } else if (programa == 3 && beca == 3){
        masterCostoDescuentoMensual = (costoMaster - (costoMaster * becaJesua)) / duracionMaster;
        masterCostoTotalMensual = costoMaster / duracionMaster;
        alert("El Master al mes con descuento por beca Jesua es: " + masterCostoDescuentoMensual.toFixed(2) + " MXN" + "\nEl costo del Master al mes sin descuento es: " + masterCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Master es: " + costoMaster + " MXN");
    } else if (beca==4){
        if (programa == 1){
            courseCostoTotalMensual = costoCourse / duracionCourse;
            alert("El costo del Course al mes es: " + courseCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Course es: " + costoCourse + " MXN");
        }else if (programa == 2){
            carreraCostoTotalMensual = costoCarrera / duracionCarrera;
            alert("El costo de la Carrera al mes es: " + carreraCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total de la Carrera es: " + costoCarrera + " MXN");
        }else{
            masterCostoTotalMensual = costoMaster / duracionMaster;
            alert("El costo del Master al mes es: " + masterCostoTotalMensual.toFixed(2) + " MXN" + "\nEl costo total del Master es: " + costoMaster + " MXN");
        }
    }
  }