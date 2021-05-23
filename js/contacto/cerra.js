/* OverLay informacion de requerimientos */
var overLat_infoRequerimientos = document.getElementById('overLat_infoRequerimientos'),
    btn_infoRequerimientos = document.getElementById('btn_infoRequerimientos'),
    btnc_infoRequerimientos = document.getElementById('btnc_infoRequerimientos');

btn_infoRequerimientos.addEventListener('click', function() {
    overLat_infoRequerimientos.classList.add('verOverlay');
});

btnc_infoRequerimientos.addEventListener('click', function() {
    overLat_infoRequerimientos.classList.remove('verOverlay');
});


/* OverLay informacion de nombre de dominio */
var overLay_infoNombreDominio = document.getElementById('overLay_infoNombreDominio'),
    btn_infoNombreDominio = document.getElementById('btn_infoNombreDominio'),
    btnc_infoNombreDominio = document.getElementById('btnc_infoNombreDominio');

btn_infoNombreDominio.addEventListener('click', function() {
    overLay_infoNombreDominio.classList.add('verOverlay');
});

btnc_infoNombreDominio.addEventListener('click', function() {
    overLay_infoNombreDominio.classList.remove('verOverlay');
});