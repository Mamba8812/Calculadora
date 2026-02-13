const pantalla = document.getElementById('pantalla'); //seleccionamos pantalla//

function agregar(valor) {
    pantalla.value += valor; //funcion para agregar numeros y operaciones//
}

function limpiar() {
    pantalla.value = '';
}

function borrarUno() {
    pantalla.value = pantalla.value.slice(0, -1)
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'error';
        setTimeout(() => limpiar(), 1500)
    }}

function raiz() {
    try {
        pantalla.value = Math.sqrt(parseFloat(pantalla.value));
    } catch {
        pantalla.value = 'error';
    }
}

function potencia() {
    try {
        pantalla.value = Math.pow(parseFloat(pantalla.value), 2);
    } catch {
        pantalla.value = 'error';
    }
}

function porcentaje() {
    try {
        pantalla.value = parseFloat(pantalla.value) / 100;
    } catch {
        pantalla.value = 'error';
    }
}