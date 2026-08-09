function getStarPosition() {
    x = Math.floor(Math.random() * 100);
    y = Math.floor((Math.random() * 100)/2);
    return [x, y];
}

function GenerateStars() {
    for (let i = 0; i < 75; i++) {
        star = document.createElement("div");
        star.classList.add("star");
        star.style.display = "block";
        position = getStarPosition();
        star.style.left = position[0] + "%";
        star.style.top = position[1] + "%";
        star.style.position = "absolute";
        star.style.animationDelay = Math.random() * 5 + "s";
        document.getElementById("stars").appendChild(star);
    }
}

GenerateStars();