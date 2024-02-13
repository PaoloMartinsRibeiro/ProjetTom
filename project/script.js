var carre = document.getElementById("carre");
var zoneCible = document.getElementById("zoneCible");
var dansLaZone = false; // État pour vérifier si le carré est déjà dans la zone

function deplacerCarre(e) {
    var carreLeft = carre.offsetLeft;
    var carreTop = carre.offsetTop;

    switch (e.key) {
        case "ArrowLeft":
            carre.style.left = carreLeft - 10 + "px";
            break;
        case "ArrowRight":
            carre.style.left = carreLeft + 10 + "px";
            break;
        case "ArrowUp":
            carre.style.top = carreTop - 10 + "px";
            break;
        case "ArrowDown":
            carre.style.top = carreTop + 10 + "px";
            break;
    }
    verifierPosition();
}

function verifierPosition() {
    var zone = zoneCible.getBoundingClientRect();
    var carreRect = carre.getBoundingClientRect();

    // A TOI DE JOUER
    //
    // Vérifie si le carré est dans la zone cible
    // Si c'est le cas, change la couleur du carré en vert
    // 
    // POUR SE FAIRE
    // Tu peux utiliser la ligne de code suivante : carre.style.backgroundColor = 'couleur';
    // Avant de changer la couleur, tu dois trouver la condition qui permet de vérifier si le carré est dans la zone cible
    // A l'aide d'un if (condition) { ... }
    //
    // Good Luck :))
}

document.addEventListener("keydown", deplacerCarre);
