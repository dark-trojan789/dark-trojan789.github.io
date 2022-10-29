let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;
scoreColorChanger()
function homePlus1() {
    homeScore += 1;
    homeEl.textContent = homeScore;
    scoreColorChanger();
}
function homePlus3() {
    homeScore += 3;
    homeEl.textContent = homeScore;
    scoreColorChanger();
}
function homePlus5() {
    homeScore += 5;
    homeEl.textContent = homeScore;
    scoreColorChanger();
}
function guestPlus1() {
    guestScore += 1;
    guestEl.textContent = guestScore;
    scoreColorChanger();
}
function guestPlus3() {
    guestScore += 3;
    guestEl.textContent = guestScore;
    scoreColorChanger();
}
function guestPlus5() {
    guestScore += 5;
    guestEl.textContent = guestScore;
    scoreColorChanger();
}
function scoreColorChanger(){
    if (homeScore>guestScore){
        document.getElementById("home-score").style.color = "#10B981";
        document.getElementById("guest-score").style.color = "#F94F6D"
    }
    else if (homeScore==guestScore){
        document.getElementById("home-score").style.color = "#FBBF24";
        document.getElementById("guest-score").style.color = "#FBBF24";
    }
    else {
        document.getElementById("home-score").style.color = "#F94F6D";
        document.getElementById("guest-score").style.color = "#10B981"
    }
}
function resetScore(){
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    scoreColorChanger();
    document.getElementById('timer').innerHTML =
  05 + ":" + 01;
    startTimer();
}
var flag = false;
function startStopTimer() {
    if(!flag){
        flag = !flag;
        return flag;
    }
    else {
        flag = false;
        startTimer();
    }
}


document.getElementById('timer').innerHTML =
  05 + ":" + 01;
  
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0 || flag){
    return
  }
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1005);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
