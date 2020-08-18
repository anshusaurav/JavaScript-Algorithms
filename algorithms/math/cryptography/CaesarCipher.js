const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function getCipherMap(alphabet, shift) {
    return alphabet.reduce((acc, char, index) => {
        const accClone = { ...acc };
        let encIndex = (index + shift) % alphabet.length;
        if (encIndex < 0) {
            encIndex += alphabet.length;
        }
        accClone[char] = alphabet[encIndex];
        return accClone;
    }, {})
}

function caesarCipherEncrypt(str, shift, alphabet = englishAlphabet) {
    const cipherMap = getCipherMap(alphabet, shift);
    return str.toLowerCase().split('').map((char) => {
        return cipherMap[char] || char
    }).join('');
}

function caesarCipherDecrypt(str, shift, alphabet = englishAlphabet) {
    const cipherMap = getCipherMap(alphabet, -shift);

    return str.toLowerCase().split('').map((char) => {
        return cipherMap[char] || char
    }).join('');
}