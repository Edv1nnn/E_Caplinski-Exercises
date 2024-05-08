"use strict";

function simboliuSkaiciuokle(tekstas) {
    const tikRaides = tekstas.replace(/\s/g, '');
    return tikRaides.length;
}

simboliuSkaiciuokle("Labas, Edvinas");
