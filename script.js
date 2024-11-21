
var currentTheme = "main";

function updateImage(src) {
    let imgElement = document.querySelector("img");

    if (!imgElement) {
        imgElement = document.createElement("img");
        document.body.appendChild(imgElement);
    }

    imgElement.src = src;
}

function Blue(theme) {
    if (currentTheme === "blue") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        document.body.style.fontFamily = "Arial, sans-serif";
        updateImage("men.jpg");
        currentTheme = "blue";
    }
}

function Pink(theme) {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "black";
        document.body.style.fontFamily = "'Comic Sans MS', cursive";
        updateImage("girl.png");
        currentTheme = "pink";
    }
}

function Brown(theme) {
    if (currentTheme === "brown") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "brown";
        document.body.style.color = "white";
        document.body.style.fontFamily = "'Times New Roman', Times, serif";
        updateImage("old.png");
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundColor = "F0FFFF";
    document.body.style.color = "black";
    document.body.style.fontFamily = "default";
    updateImage("horro.jpg");
    currentTheme = "main";
}