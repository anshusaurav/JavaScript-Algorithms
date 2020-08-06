/**
 * To calculate the number of valuable bits we need to shift 1 one bit left each
 * time and see if shifted number is bigger than the input number.
 * @param {*} num 
 */
function bitLength(num) {
    let cnt = 0;
    while (num >= 1) {
        num = num >> 1;
        cnt++;
    }
    return cnt;
}