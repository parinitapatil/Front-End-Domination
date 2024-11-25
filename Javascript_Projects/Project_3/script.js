function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const sec = String(now.getSeconds()).padStart(2, '0');

  document.querySelector('.clock').textContent=`${hours}:${min}:${sec}`
}

setInterval(updateClock, 1000);
updateClock();

