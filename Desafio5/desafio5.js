

var word1 = 'El veloz murciélago hindú comía feliz cardillo y kiwi.';
console.log(word1);
var word2 = prompt('Ingrese la palabra que desea buscar en el texto de la consola:');

var result = finder(word2.toLowerCase(), word1.toLowerCase());
console.log(result);

function finder(codeWord, containerWord) {
    if(typeof codeWord != 'string' || typeof containerWord != 'string' || codeWord === '') {
        return false;
    }
    var result = containerWord.indexOf(codeWord);
    if(result === -1) {
        return false;
    }
    else {
        return true;
    }
}