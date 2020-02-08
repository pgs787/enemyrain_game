const backGround = document.querySelector("#bg");
const heroPostion = document.querySelector(".hero");
const point = document.querySelector(".point");
let pointCount = 0;

class Enermy {
  constructor() {
    this.ghost = document.createElement("div");
    this.life = document.querySelector(".life");

    this.makeGhost();
    this.moveDown();
  }
  // 고스트 생성
  makeGhost = () => {
    const { life, ghost } = this;
    if (life.childElementCount !== 0) {
      const random = Math.floor(Math.random() * 760);
      ghost.className = "ghost";
      ghost.style.left = random + "px";
      backGround.appendChild(ghost);
    }
  };

  // 고스트 아래 무빙
  moveDown = () => {
    const { ghost, life } = this;

    let ghostValue = window.getComputedStyle(ghost);

    let ghostDown = setInterval(() => {
      ghost.style.top = parseInt(ghostValue.top) + 1 + "px";
      // 고스트 삭제
      // 고스트 영웅에 겹칠 때 삭제
      if (
        ghost.offsetTop === 506 &&
        ghost.offsetLeft + 35 > heroPostion.offsetLeft &&
        ghost.offsetLeft - 35 < heroPostion.offsetLeft
      ) {
        console.log(point);
        pointCount += 10;
        point.innerText = pointCount;
        // 고스트 사운드
        const ghostSound = new Audio("audio.wav");
        ghostSound.play();
        ghost.className = "ghost-dead";

        setTimeout(function() {
          ghost.remove();
        }, 50);
      }

      // 고스트 바닥에 닿을 때 삭제 및 Game Over
      if (ghost.offsetTop === 555) {
        life.removeChild(life.firstChild);
        ghost.style.top = 545 + "px";
        ghost.className = "ghost-dead";
        setTimeout(function() {
          ghost.remove();
        }, 50);
      }
      this.gaemEnd(ghostDown);
    }, 1);
  };
  // Game Over 출력
  gaemEnd = ghostDown => {
    const { life, ghost } = this;
    if (life.childElementCount === 0) {
      clearInterval(ghostDown);
      clearInterval(this.makeGhost);
      ghost.remove();
      const div = document.createElement("div");
      div.className = "gameover";
      div.innerHTML = "Game over";
      backGround.appendChild(div);
      backGround.style.background = "black";
      backGround.style.opacity = "0.7";
    }
  };
}

const iter = setInterval(function() {
  const newEnemy = new Enermy();
}, 3000);

// let pointCount = 0;
// // 고스트 생성
// function ghostCre(ghostMake) {
//   const ghost = document.createElement("div");
//   const style = window.getComputedStyle(ghost);
//   const random = Math.floor(Math.random() * 760);

//   ghost.className = "ghost";
//   ghost.style.left = String(random) + "px";
//   backGround.appendChild(ghost);

//   // stop 버튼 누르면 고스트 삭제
//   stopBtn.addEventListener("click", function() {
//     ghost.remove();
//   });
//   // 고스트 아래로 이동
//   const downM = setInterval(function() {
//     const topValue = parseInt(style.top);
//     ghost.style.top = topValue + 1 + "px";

//     // 고스트 삭제
//     // 고스트 영웅에 겹칠 때 삭제
//     if (
//       ghost.offsetTop === 506 &&
//       ghost.offsetLeft + 35 > heroPostion.offsetLeft &&
//       ghost.offsetLeft - 35 < heroPostion.offsetLeft
//     ) {
//       pointCount += 10;
//       point.innerText = pointCount;
//       // 고스트 사운드
//       ghostSound.play();
//       ghost.className = "ghost-dead";

//       setTimeout(function() {
//         ghost.remove();
//       }, 50);
//     }

//     // 고스트 바닥에 닿을 때 삭제 및 Game Over
//     if (ghost.offsetTop === 555) {
//       life.removeChild(life.firstChild);
//       ghost.style.top = 545 + "px";
//       ghost.className = "ghost-dead";
//       setTimeout(function() {
//         ghost.remove();
//       }, 50);
//     }
//     if (life.childElementCount === 0) {
//       clearInterval(downM);
//       clearInterval(ghostMake);
//       const div = document.createElement("div");
//       div.className = "gameover";
//       div.innerHTML = "Game over";
//       backGround.appendChild(div);
//       backGround.style.background = "black";
//       backGround.style.opacity = "0.7";
//     }
//   }, 2);
// }

// // 게임 스타트, 중지 글씨
// function startFont() {
//   bgF.style.display = "block";
//   bgF.className = "bg-start";
//   bgF.innerHTML = "start";
//   setTimeout(function() {
//     bgF.style.display = "none";
//   }, 680);
// }

// function stopFont() {
//   bgF.style.display = "block";
//   bgF.className = "bg-stop";
//   bgF.innerHTML = "stop";
//   setTimeout(function() {
//     bgF.style.display = "none";
//   }, 680);
// }

// // 고스트 생성
// function gameStartandStop() {
//   const ghostMake = setInterval(function() {
//     const newGhost = new ghostCre(ghostMake);
//   }, 1500);

//   // stop 버튼 누르면 고스트 생성 중지
//   stopBtn.addEventListener("click", function() {
//     clearInterval(ghostMake);
//   });
//   stopBtn.addEventListener("click", function() {
//     point.innerHTML = 0;
//   });
// }

// startBtn.addEventListener("click", gameStartandStop);
// startBtn.addEventListener("click", startFont);
// stopBtn.addEventListener("click", stopFont);
