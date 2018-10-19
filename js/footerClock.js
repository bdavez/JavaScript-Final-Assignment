// Author: Brendan Davis
// Email: davis.045@gmail.com
// Date: Oct.19 2018
// Course: CPNT-262
// Assignment: Final Project

function displayDate() {
    let time = document.getElementById('footerClock');
    let date = new Date();
    time.innerHTML = date
}
setInterval(displayDate, 1000);