function prueba() {
    if (screen.width <= 767)
        console.log("Pequeña")


    else
    if (screen.width >= 767)
        console.log("Mediana")

    var cajaRedesSociales = document.querySelector("#rm_cajaRedesSociales");
    var navegador = document.querySelector("#rm_header");
    var logo1 = document.querySelector("#rm_logo");
    var logo2 = document.querySelector("#rm_logo2");

    var textMenu1 = document.querySelector("#textMenu1");
    var textMenu2 = document.querySelector("#textMenu2");
    var textMenu3 = document.querySelector("#textMenu3");

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10) {
                console.log('hola scroll');
                cajaRedesSociales.classList.add("none");
                navegador.classList.remove("header");
                navegador.classList.add("fijarMenu");

                logo1.classList.remove("rm_logo");
                logo1.classList.add("noneQuitar");
                logo2.classList.remove("noneQuitar");
                logo2.classList.add("rm_logo");

                textMenu1.classList.add("textFijo");
                textMenu2.classList.add("textFijo");
                textMenu3.classList.add("textFijo");

            } else {
                console.log('no scroll');
                cajaRedesSociales.classList.remove("none");
                navegador.classList.remove("fijarMenu");
                navegador.classList.add("header");

                logo1.classList.add("rm_logo");
                logo1.classList.remove("noneQuitar");
                logo2.classList.add("noneQuitar");
                logo2.classList.remove("rm_logo");

                textMenu1.classList.remove("textFijo");
                textMenu2.classList.remove("textFijo");
                textMenu3.classList.remove("textFijo");
            }
        });
    });
}
prueba();
