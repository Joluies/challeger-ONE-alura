function Visibility(hasText) {
    const noMessage = document.getElementById("no-message");
    const outputText = document.getElementById("texto-encriptado");
    const copyButton = document.getElementById("btn-copiar");

    if (hasText) {
        noMessage.style.display = "none";
        outputText.style.display = "block";
        copyButton.style.display = "inline-block";
    } else {
        noMessage.style.display = "block";
        outputText.style.display = "none";
        copyButton.style.display = "none";
    }
}

// Función para encriptar el texto
function encrypt() {
    let inputText = document.getElementById("encriptador").value;
    if (inputText.trim() !== "") {
        let encryptedText = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("texto-encriptado").textContent = encryptedText;
        Visibility(true);
    } else {
        Visibility(false);
    }
}

// Función para desencriptar el texto
function decrypt() {
    let inputText = document.getElementById("encriptador").value;
    if (inputText.trim() !== "") {
        let decryptedText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById("texto-encriptado").textContent = decryptedText;
        updateVisibility(true);
    } else {
        updateVisibility(false);
    }
}
function copy() {
    let outputElement = document.getElementById("texto-encriptado");
    let outputText = outputElement.textContent;

    navigator.clipboard.writeText(outputText).then(function() {
        alert("Texto copiado al portapapeles");

        // Limpia el contenido después de copiar
        outputElement.textContent = ""; // Borra el contenido copiado
    }, function() {
        alert("Error al copiar el texto");
    });
}
