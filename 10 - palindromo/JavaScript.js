

function palindromo (string) {
    string = string.toLocaleLowerCase();
    let stringInvertida = string.split("").reverse().join('');

    if (string == stringInvertida) {
        console.log('Essa palavra é palindromo: ' + string);
    }
    else {
        console.log('Essa palavra NÃO é palindromo: ' + string);
    }

}
console.log(palindromo('Sabrina'));


