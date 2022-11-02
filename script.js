var ka = document.getElementById("karuzela");
var opcje = document.getElementById("kupa");
var btn = document.getElementById("przycisk");
      btn.addEventListener("click", e => {
        opcje.classList.add("pokaz")
        ka.classList.add("karuzela2")
      });
var btn2 = document.getElementById("przycisk2");
btn2.addEventListener("click", e => {
  opcje.classList.remove("pokaz")
  ka.classList.remove("karuzela2")

});