function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
window.onload = function(){
  sleep(500)
  document.getElementById('clickButton').click();
}