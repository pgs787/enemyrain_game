const parent = document.querySelector("#bg");
const heroPostion = document.querySelector(".hero");
const heroStyle = window.getComputedStyle(heroPostion);
const ghostSound = new Audio("audio.wav"); // 고스트 죽음 사운드

// 고스트 생성
function ghostCre() {
  const ghost = document.createElement("div");
  const style = window.getComputedStyle(ghost);
  const random = Math.floor(Math.random() * 760);

  ghost.className = "ghost";
  ghost.style.left = String(random) + "px";
  parent.appendChild(ghost);

  // 고스트 아래로 이동
  setInterval(function() {
    const topValue = parseInt(style.top);
    ghost.style.top = topValue + 1 + "px";

    // 고스트 삭제
    // 고스트 영웅에 겹칠 때 삭제
    if (
      ghost.offsetTop > 506 &&
      ghost.offsetLeft + 35 > heroPostion.offsetLeft &&
      ghost.offsetLeft - 35 < heroPostion.offsetLeft
    ) {
      ghostSound.play();
      ghost.className = "ghost-dead";

      setTimeout(function() {
        ghost.remove();
      }, 500);
    }

    // 고스트 바닥에 닿을 때 삭제
    if (ghost.offsetTop > 550) {
      ghost.style.top = 550 + "px";
      ghost.className = "ghost-dead";

      setTimeout(function() {
        ghost.remove();
      }, 300);
    }
  }, 2);
}

function init() {
  // 고스트생성주기

  setInterval(function() {
    const newGhost = new ghostCre();
  }, 3000); //3200
}

init();
