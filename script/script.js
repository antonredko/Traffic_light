var main = document.getElementById("main"),
    seconds = main.getElementsByClassName("seconds")[0],
    red = main.getElementsByClassName("red")[0],
    green = main.getElementsByClassName("green")[0],
    span = document.createElement("span"),
    count = 10;

    seconds.appendChild(span);

function startOfTime() {
    var timeOfColor = setInterval(function() {
        span.innerText = count;
        count -= 1;
        if(count < 0) {
            count = 10;
            red.style.background = "#969494";
            green.style.background = "green";
            span.style.color = "green";
        }
    }, 1000);
}

window.addEventListener("load", startOfTime);