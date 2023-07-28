// right-down
var buttonCaret = {
    Home: 'right',
    CodeUp: 'right',
    Another: 'right',
};

// max-height: 0 - 100 vh
var buttonHeight = {
    Home: 0,
    CodeUp: 0,
    Another: 0,
};

// scale: 0 - 1
var buttonScaleY = {
    Home: 0,
    CodeUp: 0,
    Another: 0,
};


function titleMenu(btnIndex, name) {
    var btn = document.getElementsByClassName("title_menu_btn");
    var titleWrap = document.getElementsByClassName("title_wrap");

    // caret 방향
    for (var key in buttonCaret) {
        if (name == key) {
            buttonCaret[key] == 'right' ? buttonCaret[key] = 'down' : buttonCaret[key] = 'right';
            btn[btnIndex].innerHTML = `<i class="fa-regular fa-square-caret-${buttonCaret[key]}"></i> ${name}`;
        }
    }

    // 높이
    for (var key in buttonHeight) {
        if (name == key) {
            buttonHeight[key] == 0 ? buttonHeight[key] = 100 : buttonHeight[key] = 0;
            titleWrap[btnIndex].style.maxHeight = buttonHeight[key] + "vh";
        }
    }

    // scaleY
    for (var key in buttonScaleY) {
        if (name == key) {
            buttonScaleY[key] == 0 ? buttonScaleY[key] = 1 : buttonScaleY[key] = 0;
            titleWrap[btnIndex].style.transform = "scaleY(" + buttonScaleY[key] + ")";
        }
    }
}
