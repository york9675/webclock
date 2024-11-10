let timeFormat = 12;
let darkMode = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = timeFormat === 12 ? (hours % 12 || 12) : hours;
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  if (timeFormat === 12) {
    $("#ampm").text(ampm);
  } else {
    $("#ampm").text('');
  }

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  $("#hourLine").css("transform", `rotate(${hourAngle}deg)`).children(".clock_number").html(formattedHours).css("transform", `rotate(${-hourAngle}deg)`);
  $("#minuteLine").css("transform", `rotate(${minuteAngle}deg)`).children(".clock_number").html(formattedMinutes).css("transform", `rotate(${-minuteAngle}deg)`);
  $("#secondLine").css("transform", `rotate(${secondAngle}deg)`).children(".clock_number").html(formattedSeconds).css("transform", `rotate(${-secondAngle}deg)`);
}

function changeTimeFormat() {
  timeFormat = parseInt($("#timeFormat").val());
  updateClock();
}

function toggleMode() {
  darkMode = !darkMode;
  updateMode();
}

function updateMode() {
  if (darkMode) {
    $("body").css("background-color", "#333");
    $("body").css("color", "#fff");
    $("#clock").css("background-color", "#333");
    $("#modeToggle").html("[☀️] Light Mode");
    $("#buyMeACoffee").css("color", "#fff");
    $("#githubLink").css("color", "#fff");
  } else {
    $("body").css("background-color", "#f5f5f5");
    $("body").css("color", "#000");
    $("#clock").css("background-color", "#f5f5f5");
    $("#modeToggle").html("[🌙] Dark Mode");
    $("#buyMeACoffee").css("color", "#000");
    $("#githubLink").css("color", "#000");
  }
}

function openBuyMeACoffee() {
  window.open('https://www.buymeacoffee.com/york0524', '_blank');
}

function openGitHub() {
  window.open('https://github.com/york9675/webclock', '_blank');
}

setInterval(updateClock, 1000);

updateMode();
updateClock();