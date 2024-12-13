const d = document,
  w = window;
export default function scrollTop(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.scrollY || d.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    // console.log(w.scrollY, d.documentElement.scrollTop);
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        //left: 0,
      });
    }
  });
}
