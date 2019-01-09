import { print } from "introcs";

export let main = async () => {
    let x: number;
    x = 0;
    let y: number;
    y = x;
    x++;
    print("x:" + x + ", y:" + y);
};

main();