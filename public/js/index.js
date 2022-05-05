var hour = document.querySelector("#hour");
var min = document.querySelector("#min");
var sec = document.querySelector("#sec");


function cloak() {
    var date = new Date();

    hour.innerHTML = date.getHours() + ":";
    min.innerHTML = date.getMinutes() + ":";
    sec.innerHTML = date.getSeconds();

}
cloak();
setInterval(cloak, 1000);

window.onload = function() {
    var users = 0;
    var tracker = document.querySelector("#tracker");

    tracker.childNodes[1].innerText = `Пользователей онлайн: ${++users}`
}