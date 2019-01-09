import { print, promptNumber } from "introcs";

export let main = async () => {
    let a = await promptNumber("a");
    let b = await promptNumber("b");

    // Function Call
    let answer = max(a, b);

    print(answer + " is greatest!");
};
// Function Definition
let max = (x: number, y: number): number => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};

main();