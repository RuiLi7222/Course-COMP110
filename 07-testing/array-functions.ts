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
 * Fill an array of increasing numbers from low to high, inclusive.
 */
export let fillRange = (low: number, high: number): number[] => {
    let f: number[] = [];
    let b = Math.ceil(low);
    let c = Math.floor(high);
    if (b !== low && c === high) {
        let a: number[] = [low];
        for (let i = 0; i < c - b + 1; i++) {
            a[a.length] = i + b;
        } 
        return a;   
    } else if (b === low && c !== high) {
        let d: number[] = [];
        for (let i = 0; i < c - b + 1; i++) {
            d[d.length] = i + b;
        }
        d[d.length] = high;
        return d;   
    } else if (b !== low && c !== high) {
        let g: number[] = [low];
        for (let i = 0; i < c - b + 1; i++) {
            g[g.length] = i + b;
        } 
        g[g.length] = high;
        return g; 
    } else if (b <= c) {
        let e: number[] = [];
        for (let i = 0; i < c - b + 1; i++) {
            e[e.length] = i + b;
        }  
        return e; 
    }
    return f;
   
};

/**
 * Given a number array and some number n, return the first index
 * the number n occurs at as an element of a. If the number n does
 * not exist in a, then returns -1.
 */
export let indexOf = (a: number[], n: number): number => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === n) {
            // We've found a matching element
            return i;
        }
    }
    // We've checked everything! No matches...
    return -1;
};