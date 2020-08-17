/**
 * Start marking multiples of `p` from `p * p`, and not from `2 * p`.
 * The reason why this works is because, at that point, smaller multiples
 * of `p` will have already been marked `false`. 
 * @param {*} num 
 */

function sieveOfEratosthenses(num) {
    const isPrime = Array(num).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    const res = [];

    for (let i = 2; i <= num; i++) {
        if (isPrime[i])
            res.push(i);
        let next = i * i;

        while (next <= num) {
            isPrime[next] = false;
            next += i;
        }

    }

    return res;
}