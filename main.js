document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const inp = document.querySelector(".inp");

  function lightToDark() {
    if (inp.checked) {
      body.style.backgroundImage = "url('./img/win11G.jfif')";
    } else {
      body.style.backgroundImage = "url('./img/win11.jfif')";
    }
  }

  inp.addEventListener("change", lightToDark);
});
