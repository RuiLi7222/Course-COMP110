export let hesistantString = (a: string[]): string => {
    let b = "";
    let c = "...";
    for (let i = 0; i < a.length; i++) {
        b = b + a[i] + c;
    }
    return b;
};