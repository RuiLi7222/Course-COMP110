import { print, promptNumber } from "introcs";
export let main = async () => {
    let n = await promptNumber("How many times?");
    let i = 0;
    while (i < n) {
        print("Loop: " + i);
        i = i + 1;
    }
    print("Done!");
};
main();