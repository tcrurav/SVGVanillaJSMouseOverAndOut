window.onload = initialize;

var telde;

function initialize() {
    var svgObject = document.getElementById('svg-object').contentDocument;
    telde = svgObject.getElementById("Telde");

    telde.addEventListener("mouseover", showInfoMouseOverTelde);
    telde.addEventListener("mouseout", showInfoMouseOutTelde);
}

function showInfoMouseOverTelde() {
    var infoTelde = document.getElementById("info-telde");
    infoTelde.innerHTML = "¡Muy bien! Estás sobre el municipio de Telde";

    telde.style.fill = "red";
}

function showInfoMouseOutTelde() {
    var infoTelde = document.getElementById("info-telde");
    infoTelde.innerHTML = "Pon el ratón sobre el municipio de Telde";

    telde.style.fill = "#fff8dc";
}