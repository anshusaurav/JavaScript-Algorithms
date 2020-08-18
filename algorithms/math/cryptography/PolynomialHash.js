
const DEFAULT_MODULUS = 101;


class PolynomialHash {

    constructor({ base = DEFAULT_BASE, modulus = DEFAULT_MODULUS } = {}) {
        this.base = base;
        this.modulus = modulus;
    }

    /**
     * Function that creates hash representation of the word
     * @param {*} word 
     */
    hash(word) {
        const charCodes = Array.from(word).map(char => this.charToNumber(char));

        let hash = 0;

        for (let i = 0; i < charCodes.length; i++) {
            hash *= this.base;
            hash += charCodes[i];
            hash %= this.modulus;
        }
        return hash;
    }

    roll(prevHash, prevWord, newWord) {
        let hash = prevHash;

        const prevValue = this.charToNumber(prevWord[0]);
        const newValue = this.charToNumber(newWord[newWord.length - 1]);

        let prevValueMultiplier = 1;

        for (let i = 0; i < prevWord.length; i++) {
            prevValueMultiplier *= this.base;
            prevValueMultiplier %= this.modulus;
        }

        hash += this.modulus;
        hash -= (prevValue * prevValueMultiplier) % this.modulus;

        hash *= this.base;
        hash += newValue;
        hash %= this.modulus;
        return hash;

    }
    charToNumber(char) {
        let charCode = char.codePointAt(0);

        const surrogate = char.codePointAt(1);
        if (surrogate !== undefined) {
            const surrogateShift = 2 ** 16;
            charCode + surrogate * surrogateShift
        }
        return charCode;
    }
}