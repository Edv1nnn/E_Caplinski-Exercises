function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

let masyvas = ['NAmAs', 'Saule', 'MaSina', 'KoMpiUteRis'];

for (let i = 0; i < masyvas.length; i++) {
  masyvas[i] = swapCase(masyvas[i]);
}

console.log(masyvas);