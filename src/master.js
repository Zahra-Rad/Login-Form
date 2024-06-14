const inps = document.querySelectorAll("input");
const switch_btn = document.querySelector("#switch");
const sections = document.querySelectorAll("section");
let btn_clicks = true;

inps.forEach((val) => {
  val.addEventListener("input", () => {
    if (val.value != "") {
      val.nextElementSibling.style.marginBottom = "30px";
    }
  });
});

switch_btn.addEventListener("click", (e) => {
  let signs = switch_btn.children;
  if (btn_clicks) {
    signs[0].style.top = "-250%";
    signs[1].style.top = "50%";
    sections[0].style.transform =
      "translateX(" + sections[1].clientWidth + "px";
    sections[1].style.transform =
      "translateX(-" + sections[0].clientWidth + "px";
  } else {
    signs[0].style.top = "50%";
    signs[1].style.top = "350%";
    sections[0].style.transform = "translateX(0px)";
    sections[1].style.transform = "translateX(0px)";
  }
  btn_clicks = !btn_clicks;
});
