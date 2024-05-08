"use strict";

function longestCountryName(countries) {
    return countries.reduce((longest, country) => {
        return country.length > longest.length ? country : longest;
    }, "");
}

console.log(longestCountryName(["USA", "Lithuania", "France", "Denmark"]));
