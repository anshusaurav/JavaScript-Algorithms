const DEFAULT_BASE = 37;
class SimplePolynomialHash {
    constructor(base = DEFAULT_BASE) {
        this.base = base;
    }
    /**
     * This version of the function  doesn't use modulo operator.
     * Thus it may produce number overflows by generating numbers that are
     * bigger than Number.MAX_SAFE_INTEGER.
     * @param {*} word 
     */
    hash(word) {
        let hash = 0;
        for (let i = 0; i < word.length; i++) {
            hash += word.charCodeAt(i) * (this.base ** i);
        }
        return hash;
    }

    /**
     * Function that creates hash representation of the word
     * based on previous word (shifted by one character left) hash value.
     *
     * Recalculates the hash representation of a word so that it isn't
     * necessary to traverse the whole word again.
     *
     * @param {*} prevHash 
     * @param {*} prevWord 
     * @param {*} newWord 
     */
    roll(prevHash, prevWord, newWord) {
        let hash = prevHash;
        const prevValue = prevWord.charCodeAt(0);
        const newValue = newWord.charCodeAt(newWord.length - 1);

        hash -= prevValue;
        hash /= this.base;
        hash += newValue * (this.base ** (newWord.length - 1));

        return hash;
    }
}