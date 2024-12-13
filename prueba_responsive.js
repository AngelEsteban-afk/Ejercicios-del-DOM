const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      //alert("Formulario Enviado");
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }

    if (e.key === "Escape") {
      e.target.value = "";
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
}
