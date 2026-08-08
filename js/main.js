// StudyFlow — vòng đếm ngược phiên tập trung ở hero
(function () {
  const SESSION_SECONDS = 25 * 60;
  const CIRCUMFERENCE = 2 * Math.PI * 88; // r = 88, khớp với SVG trong index.html

  const ring = document.getElementById("ring-progress");
  const timeLabel = document.getElementById("ring-time");
  const toggleBtn = document.getElementById("ring-toggle");

  if (!ring || !timeLabel || !toggleBtn) return;

  let remaining = 18 * 60 + 24; // trạng thái minh hoạ ban đầu: 18:24 còn lại
  let running = true;
  let timerId = null;

  function render() {
    const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
    const seconds = String(remaining % 60).padStart(2, "0");
    timeLabel.textContent = `${minutes}:${seconds}`;

    const progressRatio = remaining / SESSION_SECONDS;
    ring.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progressRatio));
  }

  function tick() {
    if (remaining <= 0) {
      stop();
      return;
    }
    remaining -= 1;
    render();
  }

  function start() {
    running = true;
    toggleBtn.textContent = "Tạm dừng";
    timerId = window.setInterval(tick, 1000);
  }

  function stop() {
    running = false;
    toggleBtn.textContent = "Tiếp tục";
    window.clearInterval(timerId);
  }

  toggleBtn.addEventListener("click", function () {
    if (running) {
      stop();
    } else {
      start();
    }
  });

  ring.style.strokeDasharray = String(CIRCUMFERENCE);
  render();
  start();
})();
