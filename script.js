let counter = 60;
let minutesCounter = 1;
let startInterval;

let start = () => {
  startInterval = setInterval(() => {
    if (counter > 0 && minutesCounter >= 0) {
      counter--;
      /////// to make sure that always there is a 0 is seconds section
      if (counter >= 10) {
        document.getElementById("seconds").innerHTML = counter;
      } else {
        document.getElementById("seconds").innerHTML = "0" + counter;
      }
      /////// End of making sure there is a 0 is seconds section
      document.getElementById("minutes").innerHTML = "0" + minutesCounter + ":";
    } else {
      counter = 60;
      minutesCounter--;
    }
    ///////// for stop program when its done
    if (minutesCounter < 0) pause();
  }, 1000);

  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("reset").disabled = false;
};

let pause = () => {
  clearInterval(startInterval);
  document.getElementById("pause").disabled = true;
  document.getElementById("start").disabled = false;
};
let reset = () => {
  clearInterval(startInterval);
  counter = 60;
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "02:";
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = true;
};
