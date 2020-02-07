// fucntion으로 만든 히어로

// const Move = e => {
//   const leftValue = parseInt(style.left);
//   // 왼쪽
//   if (e.keyCode === 37 && hero.style.left !== "4px") {
//     hero.className = "move-left";
//     hero.style.left = leftValue - 12 + "px";
//   }
//   // 오른쪽
//   if (e.keyCode === 39 && hero.style.left !== "760px") {
//     let leftValue = parseInt(style.left);
//     hero.className = "move-right";
//     hero.style.left = leftValue + 12 + "px";
//   }
//   window.addEventListener("keyup", function() {
//     hero.className = "hero";
//   });
// };

// window.addEventListener("keydown", Move);

class human {
  constructor() {
    this.hero = document.querySelector(".hero");
    // this.style = window.getComputedStyle(this.hero);
  }
  move(e) {
    const { style, hero } = this;
    // const leftValue = parseInt(style.left);
    if (e.keyCode === 37 && hero.offsetLeft > 4) {
      hero.className = "move-left";
      hero.style.left = hero.offsetLeft - 12 + "px";
    }

    if (e.keyCode === 39 && hero.offsetLeft < 760) {
      hero.className = "move-right";
      hero.style.left = hero.offsetLeft + 12 + "px";
    }
    window.addEventListener("keyup", function() {
      hero.className = "hero";
    });
  }
}

function init() {
  const man = new human();
  window.addEventListener("keydown", e => {
    man.move(e);
  });
}

init();
