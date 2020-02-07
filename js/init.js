// 히어로 생성
function init() {
  const man = new human();
  // 히어로 움직임
  window.addEventListener("keydown", e => {
    man.move(e);
  });
}
