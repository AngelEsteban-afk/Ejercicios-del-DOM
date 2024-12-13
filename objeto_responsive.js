const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakPoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  // Escucha el evento "change" en el MediaQueryList para detectar cambios
  breakPoint.addEventListener("change", responsive);

  // Ejecuta la función una vez para establecer el contenido inicial
  responsive(breakPoint);
}
