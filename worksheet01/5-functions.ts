export let double = (a: number[]): number[] => {
    for (let i = 0; i < a.length; i++) {
        a[i] = 2 * a[i];
    }
    return a;
};