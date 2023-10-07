function updateClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");

  const hourDeg = hour * 30 + minute * 0.5;
  const minuteDeg = minute * 6 + second * 0.1;
  const secondDeg = second * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);
