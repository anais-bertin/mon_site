document.addEventListener("DOMContentLoaded", function() {
    let name = localStorage.getItem("myName");
    let welcomeTitle = document.getElementById("welcomeTitle");
    if (!name) {
        name = prompt("C'est quoi ton blaze ?");
        localStorage.setItem("myName", name);
    }
    if (welcomeTitle) {
        welcomeTitle.innerText = "Salut " + name + ", moi c'est Anaïs !";
    }
    console.log(name);
});

document.getElementById('changeColorButton').addEventListener('click', function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    document.body.style.backgroundColor = color;
});