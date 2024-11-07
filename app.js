let timer = 60;
let score = 0;
let Hitrn = 0;

let hscore = localStorage.getItem ("hsore");
if(hscore === null){
  hscoreval = 0;
  localStorage.setItem("hscore",JSON.stringify(hscoreval))
}
else{[
  hscoreval.innerHTML="hscore:", + hscore;
]}

function incScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function Hscore() {
  hscore += 10;
  document.querySelector("#hscoreval").textContent = hscore;
}
function hit() {
  Hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = Hitrn;
}
function bubble() {
  let Clutter = "";

  for (i = 0; i <= 103; i++) {
    let rn = Math.floor(Math.random() * 10);
    Clutter += `<div class="circle">${rn}</div>`;
    console.log("azeem");
  }

  val2 = document.querySelector(".downside").innerHTML = Clutter;
}

function runtimer() {
  let timeval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeval);
      document.querySelector(
        ".downside"
      ).innerHTML = `<h2 class=over>GAME END!</h2>`;
    }
  }, 1000);
}

document.querySelector(".downside").addEventListener("click", function (dets) {
  let clickednum = Number(dets.target.textContent);
  if (clickednum === Hitrn) {
    incScore();
    Hscore();
    bubble();
    hit();
  } else {
    document.querySelector(
      ".downside"
    ).innerHTML = `<h2 class=over>GAME OVER!</h2>`;
  }
});

runtimer();
bubble();
hit();
