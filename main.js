document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const aside = document.querySelector("aside");
  const inp = document.querySelector(".inp");
  const btn = document.querySelector(".close");

  function lightToDark() {
    if (inp.checked) {
      body.style.backgroundImage = "url('./img/win11G.jfif')";
    } else {
      body.style.backgroundImage = "url('./img/win11.jfif')";
    }
  }

  inp.addEventListener("change", lightToDark);

  btn.addEventListener("click", () => {
    if (aside.style.width == "240px") {
      aside.style.width = "90px";
    } else {
      aside.style.width = "240px";
    }
  });
});
