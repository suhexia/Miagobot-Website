var n = 0;
var trans_int = "";
function transform_img(id) {
    trans_int = setInterval(function () {
        n += 5;
        img_target = document.getElementById(id);
        img_target.style.transform = "rotate(" + n + "deg)";
    }, 10)
}

function stop_to_transform(id) {
    window.clearInterval(trans_int);
    img_target = document.getElementById(id);
    img_target.style.transform = "rotate(0deg)";
    n = 0;
}