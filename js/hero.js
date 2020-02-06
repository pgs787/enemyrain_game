const hero = document.querySelector(".hero");
const style = window.getComputedStyle(hero);

const Move = e => {
  const leftValue = parseInt(style.left);
  // 왼쪽
  if (e.keyCode === 37 && hero.style.left !== "4px") {
    hero.className = "move-left";
    hero.style.left = leftValue - 12 + "px";
  }
  // 오른쪽
  if (e.keyCode === 39 && hero.style.left !== "760px") {
    let leftValue = parseInt(style.left);
    hero.className = "move-right";
    hero.style.left = leftValue + 12 + "px";
  }
  window.addEventListener("keyup", function() {
    hero.className = "hero";
  });
};

window.addEventListener("keydown", Move);
