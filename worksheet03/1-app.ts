import { print } from "introcs";
export let main = async () => {
    print("main");
    let y = a(3);
    print("main" + y);
};

let a = (x: number): number => {
    print("a" + x);
    let y = b(x - 1);
    print("a" + x);
    return y;
};

let b = (x: number): number => {
    print("b" + x);
    let y = c(x - 1);
    print("b" + x);
    return y;
};

let c = (x: number): number => {
    print("c" + x);
    x = x - 1;
    print("c" + x);
    return x;
};

main();