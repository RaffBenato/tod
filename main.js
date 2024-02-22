const limitStartEl = document.getElementById("limit-start");
const limitEndEl = document.getElementById("limit-end");
const limitTimetEl = document.getElementById("limit-time");
const btnStartEl = document.getElementById("btn-start");
const controlsEl = document.getElementById("controls");
const consoleEl = document.getElementById("console");

const timeEl = document.getElementById("time");
const limiterEl = document.getElementById("limiter");

const speedUpBtn = document.getElementById("speed-up");
const speedDownBtn = document.getElementById("speed-down");

let speed = 0;

function loadElements() {
  let currentTime = new Date();
  let formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  timeEl.textContent = formattedTime;
}

speedUpBtn.addEventListener("click", () => {
  if (speed !== 19) {
    speed = speed + 1;
    updateSpeed();
  }
});

speedDownBtn.addEventListener("click", () => {
  if (speed !== 0) {
    speed = speed - 1;
    updateSpeed();
  }
});

function updateSpeed() {
  for (let i = 1; i < 20; i++) {
    let elementId = `speedo-square${i}`;
    let element = document.getElementById(elementId);
    element.classList.add("hidden");
  }

  for (let i = 1; i <= speed; i++) {
    let elementId = `speedo-square${i}`;
    let element = document.getElementById(elementId);
    element.classList.remove("hidden");
  }
}

function handleKeyDown(event) {
  if (event.key === "ArrowUp") {
    if (speed !== 19) {
      speed = speed + 1;
      updateSpeed();
    }
  } else if (event.key === "ArrowDown") {
    if (speed !== 0) {
      speed = speed - 1;
      updateSpeed();
    }
  }
}

btnStartEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    Number(limitStartEl.value) >= 40 &&
    Number(limitStartEl.value) <= 95 &&
    Number(limitEndEl.value) >= 0 &&
    Number(limitEndEl.value) <= 30 &&
    Number(limitTimetEl.value) >= 3 &&
    Number(limitTimetEl.value) <= 10
  ) {
    consoleEl.classList.remove("hidden");
    controlsEl.classList.add("hidden");

    limiterEl.style.transform =
      "translateX(" + Number(limitStartEl.value) + "%)";

    setTimeout(function () {
      limiterEl.style.transform =
        "translateX(" + Number(limitEndEl.value) + "%)";
    }, Number(limitTimetEl.value) * 1000);
  }
});

document.addEventListener("keydown", handleKeyDown);
loadElements();
