document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const aside = document.querySelector("aside");
  const section = document.querySelector("section");
  const inp = document.querySelector(".inp");
  const btn = document.querySelector(".close");
  const iconBtn = btn.getElementsByTagName("img");
  const writtens = aside.querySelectorAll("p");

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
      section.style.transform = "translateX(85px)";
      for (let i = 0; i < iconBtn.length; ++i) {
        iconBtn[0].style.transform = "rotate(180deg)";
      }
      section.style.opacity = "0";
      writtens.forEach((p) => {
        p.style.transform = "translateX(85px)";
        p.style.opacity = "0";
      });
    } else {
      aside.style.width = "240px";
      section.style.transform = "translateX(0)";
      for (let i = 0; i < iconBtn.length; ++i) {
        iconBtn[0].style.transform = "rotate(0)";
      }
      section.style.opacity = "1";
      writtens.forEach((p) => {
        p.style.transform = "translateX(0)";
        p.style.opacity = "1";
      });
    }
  });
});
