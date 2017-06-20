// Avant

function maMethode() {
    console.log("Appel de ma méthode");
}

function maSecondeMethode(callback) {
    callback();
}

maSecondeMethode(maMethode);


