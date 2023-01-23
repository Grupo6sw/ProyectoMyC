
//Se realizan los java Script para que funcione el juego web
$(document).ready(function () {
    var fallos, aciertos, palabra_secreta, letras_probadas, letras_fallidas;

    function inicializar() {
        fallos = 0;
        aciertos = 0;
        palabra_secreta = '';
        letras_probadas = '';
        letras_fallidas = '';

        $('#imagen_ahorcado').attr('src', 'http://drive.google.com/uc?export=view&id=123XEU0tV-JavXxVmk3wV42ygeW3tku1D');
        $('#palabra').html('');
        $('#letras_fallidas').html('');

        $('#palabra_secreta').val('');
        $('#probar_letra').val('');
        $('#adivinar').val('');

        $('#palabra_secreta').attr("disabled", false);
        $('#palabra_secreta').attr("type", "text");
        $('#boton_iniciar').attr("disabled", false);

        $('#probar_letra').attr("disabled", true);
        $('#boton_probar').attr("disabled", true);

        $('#adivinar').attr("disabled", true);
        $('#boton_adivinar').attr("disabled", true);

        $('#palabra_secreta').focus();
    }
function cadenaPermitida(cadena) {
        let expresion = '';

        cadena = cadena.toLowerCase();
        expresion = /^[a-zñ ]+$/;

        if (expresion.test(cadena)) {
            return true;
        } else {
            return false;
        }
    }
function verificarLetraProbada(letra) {
        letra = letra.toLowerCase();

        if (letras_probadas.indexOf(letra) != -1) {
            return true;
        } else {
            return false;
        }
    }

function verificarLetra(letra) {
        letra = letra.toLowerCase();

        if (palabra_secreta.indexOf(letra) != -1) {
            return true;
        } else {
            return false;
        }
    }

function establecerEspacios() {
        let html = '';

        for (let i = 0; i < palabra_secreta.length; i++) {
            if (palabra_secreta.charAt(i) == ' ') {
                html += `
                <span class='espacio'></span>
                `;
            } else {
                html += `
                <span class='letra'></span>
                `;
            }
        }

        $('#palabra').html(html);
    }
function escribirSpan(indice, letra) {
        let lista_span = $('span');

        for (let i = 0; i < lista_span.length; i++) {
            if (i == indice) {
                lista_span[i].innerHTML = letra;
            }
        }
    }

function mostrarPalabra(opcion) {
        let html = '';

        for (let i = 0; i < palabra_secreta.length; i++) {

            if (palabra_secreta.charAt(i) == ' ') {
                html += `
                    <span class='espacio'>${palabra_secreta.charAt(i)}</span>
                `;
            } else {
                html += `
                    <span class='letra letra-${opcion}'>${palabra_secreta.charAt(i)}</span>
                `;
            }
        }

        $('#palabra').html(html);
    }


function incluirLetra(letra) {
        let numero_span = 0;

        letra = letra.toLowerCase();

        for (let i = 0; i < palabra_secreta.length; i++) {
            if (palabra_secreta.charAt(i) == letra) {
                aciertos++;
                escribirSpan(i, letra);
                letras_probadas += letra;
            }
        }

        if (aciertos == palabra_secreta.replace(new RegExp(' ', 'g'), '').length) {
            gane();
        }
    }

    function incluirFallo(letra) {
        let div_letras_fallidas = $('#letras_fallidas'),
            html = div_letras_fallidas.html();

        letra = letra.toLowerCase();

        fallos++;

        letras_fallidas += letra;
        letras_probadas += letra;
	
        if(fallos == 0){
            $('#imagen_ahorcado').attr('src', 'http://drive.google.com/uc?export=view&id=123XEU0tV-JavXxVmk3wV42ygeW3tku1D');
        }else if(fallos == 1){
            $('#imagen_ahorcado').attr('src', 'http://drive.google.com/uc?export=view&id=1vFdlLQjzaq5_qHzPu88rZfolqFXR1zRb');            
        }else if(fallos == 2){
            $('#imagen_ahorcado').attr('src', 'http://drive.google.com/uc?export=view&id=1aexncQCP2hBh-7xaJvvL6YDKycmwaqWm');
        }else if(fallos == 3){
            $('#imagen_ahorcado').attr('src', 'http://drive.google.com/uc?export=view&id=1hcwei7UOJLP1pzi38kA6LS1OOmkz5Nhw');
        }else if(fallos == 4){
            $('#imagen_ahorcado').attr('src', 'http://drive.google.com/uc?export=view&id=18uD0wry0bfxGaq8Qiqg3BiordCNYuGV7');
        }        

        if (html == '') {
            html = letra;
        } else {
            html += '-' + letra;
        }

        div_letras_fallidas.html(html);

        if (fallos == 4) {
            perdida();
        }
    }

    function gane() {
        $('#probar_letra').attr('disabled', true);
        $('#boton_probar').attr('disabled', true);

        $('#adivinar').attr('disabled', true);
        $('#botonadivinar').attr('disabled', true);

        $('#imagen_ahorcado').attr('src', 'http://drive.google.com/uc?export=view&id=1H1nrBllxQbpBf5SAGXlUJjagsYFYW-VS');

        mostrarPalabra('gane');
    }
})