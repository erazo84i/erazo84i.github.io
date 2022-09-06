function encriptar() {
    var texto = document.getElementById("input-ingreso").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("input-impresion").value = texto;
}

var boton = document.getElementById("btn-encriptar");
boton.onclick = function () {    
    if(document.getElementById("input-ingreso").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};


function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("input-impresion").value
    );
}
document.querySelector("#btn-copiar").addEventListener("click", copiar);

function desencriptar() {
    var texto = document.querySelector("#input-ingreso").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("input-impresion").value = texto;
}

var boton = document.getElementById("btn-desencriptar");
boton.onclick = function () {
    if(document.getElementById("input-ingreso").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.");
    }
}