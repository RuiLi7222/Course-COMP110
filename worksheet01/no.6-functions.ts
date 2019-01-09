
export let reverse = (a: number[]): number[] => {
    let b: number[] = [];
    for (let i = 0; i < a.length; i++) {
        b[i] = a[a.length - (i + 1)];
    }
    return b;
};
