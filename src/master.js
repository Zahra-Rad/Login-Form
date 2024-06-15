const inps = document.querySelectorAll("input");
const switch_btn = document.querySelector("#switch");
const sections = document.querySelectorAll("section");
const sec2box1 = sections[1].querySelectorAll("div")[0];
const sec2box2 = sections[1].querySelectorAll("div")[1];
const sec1box1 = sections[0].querySelectorAll("div")[0];
const sec1box2 = sections[0].querySelectorAll("div")[3];
let btn_clicks = true;
let sec1w = sections[0].clientWidth;
let sec2w = sections[1].clientWidth;

sec2box1.style.left = sec1w + "px";
sec2box2.style.left = "-" + sec1w + "px";
sec2box1.style.width = sec2w + "px";
sec2box2.style.width = sec2w + "px";

inps.forEach((val) => {
  val.addEventListener("input", () => {
    if (val.value != "") {
      val.nextElementSibling.style.marginBottom = "30px";
    }
  });
});

console.log();

switch_btn.addEventListener("click", (e) => {
  let signs = switch_btn.children;
  if (btn_clicks) {
    signs[0].style.top = "-250%";
    signs[1].style.top = "50%";
    sections[0].style.transform = "translateX(" + sec2w + "px";
    sections[1].style.transform = "translateX(-" + sec1w + "px";
    sec1box1.style.left = "71.5%";
    sec1box2.style.left = "71.5%";
    sec2box1.style.left = sec1w + "px";
    sec2box1.classList.add("transparent");
    sec2box2.style.left = "0px";
    sec2box2.classList.remove("transparent");
    setTimeout(() => {
      sec1box1.classList.add("hidden");
      sec1box2.classList.remove("hidden");
    }, 350);
  } else {
    signs[0].style.top = "50%";
    signs[1].style.top = "350%";
    sections[0].style.transform = "translateX(0px)";
    sections[1].style.transform = "translateX(0px)";
    sec1box1.style.left = "71.5%";
    sec1box2.style.left = "71.5%";
    sec2box1.style.left = "0px";
    sec2box1.classList.remove("transparent");
    sec2box2.style.left = "-" + sec1w + "px";
    sec2box2.classList.add("transparent");
    setTimeout(() => {
      sec1box1.classList.remove("hidden");
      sec1box2.classList.add("hidden");
    }, 450);
  }
  btn_clicks = !btn_clicks;
});
