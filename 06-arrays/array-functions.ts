/**
 * Fill an array of length n with zeros.
 */
export let fillZeros = (n: number): number[] => {
    let a: number[] = [];

    for (let i = 0; i < n; i++) {
        a[i] = 0;
    }
    
    return a;
};

/**
 * Fill an array of numbers from low to high, inclusive.
 */
export let fillRange = (low: number, high: number): number[] => {
    let a: number[] = [];
    if (low <= high) {
        for (let i = 0; i < high - low + 1; i++) {
            a[i] = low + i;
        }
        return a;
    }
    return [];
};

/**
 * Given a number array, compute the sum of its elements.
 */
export let sum = (a: number[]): number => {
    let total = 0;

    for (let i = 0; i < a.length; i++) {
        total = total + a[i];
    }
    return total;
};