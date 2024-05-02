const Masyvas = [1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 8, 8, 8, 8];
const Specialus = rastiSpecialius(Masyvas);

function rastiSpecialius(masyvas) {
    return Array.from(new Set(masyvas));
}

console.log("Specialūs elementai yra", Specialus);