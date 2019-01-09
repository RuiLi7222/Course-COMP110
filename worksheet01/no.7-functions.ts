export let isShorter = (x: number, y: number): boolean => {
    return x < y;
 };
export let shortest = (a: number[]): number => {
    let b = a[0];
    for (let i = 1; i < a.length; i++) {
        if (isShorter(b, a[i]) === true) {
            b = b;
        } else {
            b = a[i];
        }
    }
    return b;
};