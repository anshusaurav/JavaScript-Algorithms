class ComplexNumber {

    constructor({ re = 0, im = 0 } = {}) {
        this.re = re;
        this.im = im;
    }

    add(addend) {
        const complex = this.toComplexNumber(addend);

        return new ComplexNumber({
            re: this.re + complex.re,
            im: this.im + complex.im
        });
    }

    subtract(subtractend) {
        const complex = this.toComplexNumber(subtractend);
        return new ComplexNumber({
            re: this.re - complex.re,
            im: this.im + complex.im
        })
    }

    multiply(multiplyend) {
        const complex = this.toComplexNumber(multiplyend);

        return new ComplexNumber({
            re: this.re * complex.re - this.im * complex.im,
            im: this.re * complex.im + this.im * complex.re
        })
    }

    divide(dividend) {
        const complex = this.toComplexNumber(dividend);

        const complexConjugate = this.conjugate(complex);

        const finalDivident = this.multiply(complexConjugate);

        const finalDivider = (complex.re ** 2) + (complex.im ** 2);
        return new ComplexNumber({
            re: finalDivident.re / finalDivider,
            im: finalDivident.im / finalDivider
        })
    }

    conjugate(number) {
        const complex = this.toComplexNumber(number);
        return new ComplexNumber({
            re: complex.re,
            im: -1 * complex.im
        })
    }

    getRadius() {
        return Math.sqrt((this.re ** 2) + (this.im ** 2));
    }

    getPhase(inRadians = true) {

        let phase = Math.atan(Math.abs(this.im) / Math.abs(this.re));

        if (this.re < 0 && this.im > 0)
            phase = Math.PI - phase;
        else if (this.re < 0 && this.im < 0)
            phase = -(Math.PI - phase);
        else if (this.re > 0 && this.im < 0)
            phase = -phase;
        else if (this.re === 0 && this.im > 0)
            phase = Math.PI / 2;
        else if (this.re === 0 && this.im < 0)
            phase = -Math.PI / 2;
        else if (this.re < 0 && this.im === 0)
            phase = Math.PI;
        else if (this.re > 0 && this.im === 0)
            phase = 0
        else if (this.re === 0 && this.im === 0)
            phase = 0

        if (!inRadians)
            phase = radianToDegree(phase);

        return phase;
    }

    getPolarForm(inRadians = true) {
        return {
            radius: this.getRadius(), phase: this.getPhase(inRadians)
        }
    }

    toComplexNumber(number) {
        if (number instanceof ComplexNumber)
            return number;

        return new ComplexNumber({ re: number })
    }
}