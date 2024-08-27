function criptografar() {
    let texto = document.getElementById("input-text").value;
    let textoCriptografado = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")        
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("input-text").value;
    let textoDescriptografado = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")        
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("output-text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + textoCopiado.value);
}

const textarea = document.querySelector('textarea');


textarea.addEventListener('input', function() {
    
    let texto = textarea.value;

    
    texto = texto.toLowerCase().replace(/[^\w\s]/gi, '');

    
    textarea.value = texto;
});


