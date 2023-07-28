var scaleY = 0;
var height = 0;
var rightDown = 'right';

var scaleY2 = 0;
var height2 = 0;

function titleMenu() {
    var homeBtn = document.getElementById("menu_home_btn");
    rightDown == 'right' ? rightDown = 'down' : rightDown = 'right';
    homeBtn.innerHTML = `<i class="fa-regular fa-square-caret-${rightDown}"></i> Home`;

    var firstTitle = document.getElementById("home_wrap");
    height == 0 ? height = 100 : height = 0;
    firstTitle.style.maxHeight = height + "vh";

    scaleY == 0 ? scaleY = 1 : scaleY = 0;
    firstTitle.style.transform = "scaleY(" + scaleY + ")";
}

function titleMenu2() {

    var secondTitle = document.getElementById("codeup_wrap");
    height2 == 0 ? height2 = 100 : height2 = 0;
    secondTitle.style.maxHeight = height2 + "vh";

    scaleY2 == 0 ? scaleY2 = 1 : scaleY2 = 0;
    secondTitle.style.transform = "scaleY(" + scaleY2 + ")";
}