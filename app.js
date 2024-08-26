//Seleccionar todos los elementos
const botonEncriptar = document.querySelector(".boton_encriptar");
const encriptarTexto = document.querySelector(".encriptar_texto");
const texto_alerta = document.querySelector(".texto_alerta");
const copiarTexto = document.querySelector(".copiar_texto");
const cuadroResultado = document.querySelector(".cuadro_resultado_encriptador");
const botonCopiar = document.querySelector(".boton_copiar");
const botonDesencriptar = document.querySelector(".boton_desencriptar");

//Forzar el que el ingreso de caracteres solo sean en minuscula, convirtiendo el texto en mayusculas a minusculas y evitar el ingreso de caracteres especiales.
const textarea = document.getElementById("texto_ingreso");

    textarea.addEventListener("input", function() {
        // Convierte todo a minúsculas.
        this.value = this.value.toLowerCase();
        
        // Elimina cualquier carácter que no sea una letra minúscula.
        this.value = this.value.replace(/[^a-z\s]/g, "");
    });

//Funcion limpiar el área/caja de texto ingresado.
function limpiarCajaIngreso(){
    document.querySelector("#texto_ingreso").value = "";
}

//Funcion limpiar el área/caja de texto resultado.
function limpiarCajaSalida(){
    document.querySelector("#texto_resultado").value = "";
}

//Boton para encriptar.
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = encriptarTexto.value;    

    if(texto == ""){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "Campo de texto vacio, ingrese un texto en minúscula";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        copiarTexto.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        cuadroResultado.remove();
        limpiarCajaIngreso()
    } 
});

//Boton para desencriptar.
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = encriptarTexto.value;
    
    if(texto == ""){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "Campo de texto vacio, ingrese un texto en minúscula";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        copiarTexto.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        cuadroResultado.remove();
        limpiarCajaIngreso()
    }
});

//Boton para copiar.
botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = copiarTexto;
    copiar.select();
    document.execCommand("copy");
});