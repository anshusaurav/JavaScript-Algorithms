const englisgAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

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