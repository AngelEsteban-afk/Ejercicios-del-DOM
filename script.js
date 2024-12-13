import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shorcuts } from "./teclado.js";
import countdown from "./cuenta.regresiva.js";
import scrollTop from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./dereccion_wecam.js";
import getGeolocation from "./Geolocalizacion.js";
import serachFilters from "./filtro_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validacion_form.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jan 01, 2025 00:00:00", "Feliz Año Nuevo");
  scrollTop(".scroll-top");

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc?si=DYm2EK7C5MBgKH1h" target="_blank" rel="noonpener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=KRcYUsQZLzhwvRmi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://maps.app.goo.gl/3DkeDfLWJASPzMaQ6" target="_blank" rel="noonpener">Ver Location</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.360164565765!2d-69.97509628981133!3d18.450260501690156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561ebc7f49d83%3A0x741a77509df6b2ac!2sPlaza%20de%20la%20Bandera!5e0!3m2!1ses-419!2sdo!4v1731273766435!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  serachFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme", "dark-mode");
networkStatus();
speechReader();
