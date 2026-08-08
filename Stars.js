function getStarPosition(max_x, max_y) {
    x = Math.floor(Math.random() * max_x);
    y = Math.floor(Math.random() * max_y);
    return [x, y];
}

function GenerateStars() {
    for (let i = 0; i < 75; i++) {
        star = document.createElement("div");
        star.classList.add("star");
        star.style.display = "block";
        position = getStarPosition(document.getElementById("stars").offsetWidth, document.getElementById("stars").offsetHeight);
        star.style.left = position[0] + "px";
        star.style.top = position[1] + "px";
        star.style.position = "absolute";
        star.style.animationDelay = Math.random() * 5 + "s";
        document.getElementById("stars").appendChild(star);
    }
}

GenerateStars();