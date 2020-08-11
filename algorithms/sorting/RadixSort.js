const BASE_CHAR_CODE = 97;
const NUMBER_OF_POSSIBLE_DIGITS = 10;
const ENGLISH_ALPHABET_LENGTH = 26;



function radixSort(originalArray) {
    const isNumbers = isArrayOfNumbers(originalArray);
    let res = [...originalArray];
    const numPasses = this.determineNumPasses(res);

    for (let i = 0; i < numPasses; i++) {
        const buckets = isNumbers ? placeeElementsInNumberBuckets(res, i)
            : placeElementsInCharacterBuckets(res, i, numPasses);
        res = buckets.reduce((acc, elem) => {
            acc = acc.concat([...elem]);
            return acc;
        }, []);
    }
    return res;
}

function placeeElementsInNumberBuckets(array, index) {
    const mod = 10 ** (index + 1);
    const divided = 10 ** index;
    const buckets = createBuckets(NUMBER_OF_POSSIBLE_DIGITS);

    array.forEach(elem => {
        if (elem < divided) {
            buckets[0].push(elem);
        }
        else {
            const currentDigit = Math.floor((elem % mod) / divided);
            buckets[currentDigit].push(elem);
        }
    })
    return buckets;
}


function placeElementsInCharacterBuckets(array, index, numPasses) {
    const buckets = createBuckets(ENGLISH_ALPHABET_LENGTH);
    array.forEach((elem) => {
        const currentBucket = getCharCodeOfElementAtIndex(element, index, numPasses);
        buckets[currentBucket].push(elem);
    })
    return buckets;
}
function getCharCodeOfElementAtIndex(element, index, numPasses) {
    if ((numPasses - index > element.length)) {
        return ENGLISH_ALPHABET_LENGTH - 1;
    }
    const charPos = index > element.length - 1 ? 0 : element.length - index - 1;
    return element.toLowerCase().charCodeAt(charPos) - BASE_CHAR_CODE;
}
function determineNumPasses(array) {
    return this.getLengthOfLongestElement(array);
}


function getLengthOfLongestElement(array) {
    if (isArrayOfNumbers(array)) {
        return Math.floor(Math.log10(Math.max(...array))) + 1;
    }
    return array.reduce((acc, val) => {
        return val.length > acc ? val.length : acc;
    }, -Infinity)
}

function isArrayOfNumbers(array) {
    return this.isNumber(array[0]);
}

function createBuckets(num) {
    return new Array(num).fill(0).map(elem => []);
}

function isNumber(elem) {
    return Number.isInteger(elem);
}