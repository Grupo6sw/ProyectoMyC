
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
