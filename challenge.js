const campo_texto = document.querySelector("#texto-encriptado");
const campo_resultado = document.querySelector("#campo-mensaje");

const codigo_encriptado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    const texto = campo_texto.value;
    if (/[^a-z\s]/.test(texto)) {
        alert("Solo se permiten letras en minúsculas y espacios. Elimina los caracteres no válidos.");
        return;
    }

    const textoEncriptado = encriptar(texto);
    campo_resultado.value = textoEncriptado;
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < codigo_encriptado.length; i++) {
        if (fraseEncriptada.includes(codigo_encriptado[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                codigo_encriptado[i][0],
                codigo_encriptado[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(campo_texto.value);
    campo_resultado.value = textoDesencriptado;
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < codigo_encriptado.length; i++) {
        if (fraseDesencriptada.includes(codigo_encriptado[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                codigo_encriptado[i][1],
                codigo_encriptado[i][0]
            );
        }
    }
    return fraseDesencriptada;
}

function copiarTexto() {
    const campoMensaje = document.getElementById("campo-mensaje");
    campoMensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    campo_texto.value = "";
    campo_resultado.value = "";
}