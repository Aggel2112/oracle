const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btn_encriptar(){
    const texto_encriptado = encriptar(textArea.value)
    mensaje.value = texto_encriptado
    textArea.value = "",
    mensaje.style.background = "none"
}

function encriptar(string_encriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];    
    string_encriptada = string_encriptada.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(string_encriptada.includes(matriz[i][0])){
            string_encriptada = string_encriptada.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return string_encriptada
}
function btn_desencriptar(){
    const texto_desencriptar = desencriptar(textArea.value)
    mensaje.value = texto_desencriptar
    textArea.value = "",
    mensaje.style.background = "none"
}

function desencriptar(string_desencriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];    
    string_desencriptada = string_desencriptada.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(string_desencriptada.includes(matriz[i][1])){
            string_desencriptada = string_desencriptada.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return string_desencriptada
}
