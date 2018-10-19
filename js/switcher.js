// Author: Brendan Davis
// Email: davis.045@gmail.com
// Date: Oct.19 2018
// Course: CPNT-262
// Assignment: Final Project

var imgContent = document.getElementById('imgContent');

function MouseOut() {
    imgContent.src = "./img/img1.jpg";
}

package1.addEventListener("mouseover", function (event) {
    let package1 = document.getElementById('package1');
    imgContent.src = "./img/img4.jpg";
});

package2.addEventListener("mouseover", function (event) {
    let package2 = document.getElementById('package2');
    imgContent.src = "./img/img2.jpg";
});

package3.addEventListener("mouseover", function (event) {
    let package3 = document.getElementById('package3');
    imgContent.src = "./img/img3.jpg";
});