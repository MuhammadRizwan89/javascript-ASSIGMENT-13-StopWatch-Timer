// STOP WATCH CODDING

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}

// TIMER CODING

const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");

//input
const hr = 0;
const min = 0;
const sec = 15;

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const starTime = Date.now();
const futureTime = starTime + setTime;

const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;
  const angle = (remainingTime / setTime) * 360;

  //progress indicator
  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[2].style.display = "rotate(${angle}deg)";
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = "rotate(${angle}deg)";
    semicircles[0].style.transform = "rotate(${angle}deg)";
  }

  //timer
  const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((remainingTime / (1000 * 60)) % 60);
  const secs = Math.floor((remainingTime / 1000) % 60);

  timer.innerHTML = `
  <div>${hrs}</div>
  <div class="colon">:</div>
  <div>${mins}</div>
  <div class="colon">:</div>
  <div>${secs}</div>
  `;

  //5sec-condition
  if (remainingTime <= 6000) {
semicircles[0].style.backgroundColor = "red";
semicircles[1].style.backgroundColor = "red";
timer.style.color = "red";
  }

  //end
  if (remainingTime < 0) {
    clearInterval(timerLoop);
    semicircles[0].style.display = "none";
    semicircles[1].style.display = "none";
    semicircles[2].style.display = "none";

    timer.innerHTML = `
    <div>00</div>
     <div class="colon">:</div>
     <div>00</div>
     <div class="colon">:</div>
     <div>00</div>
     `;
     timer.style.color = "lightgray";
  }
}
