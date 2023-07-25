const aside = document.querySelector('aside');

Promise.all([
    fetch('/module/aside.html').then(res => res.text())
]).then(([asideData]) => {
    aside.innerHTML = asideData;

    var isMovedSideMenuBar = false;
    var sideMenuBtn = document.getElementById("side_menu_bar_btn");

    sideMenuBtn.addEventListener("click", function () {
        var sideMenuBar = document.querySelector("aside .side_menus");

        if (isMovedSideMenuBar == false) {
            sideMenuBar.style.left = "0";
            isMovedSideMenuBar = true
        } else {
            sideMenuBar.style.left = "-252px";
            isMovedSideMenuBar = false;
        }

        sideMenuBar.style.transition = "left 1s";
    });
});