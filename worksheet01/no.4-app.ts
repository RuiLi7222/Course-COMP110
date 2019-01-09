import { print } from "introcs";
export let main = async () => {
    let as = arraySmasher("bye");
    print(as);
};

let arraySmasher = (foo: string): string => {
    let s = "";
    for (let b = 0; b < foo.length; b++) {
        if (s.length % 2 === 0) {
            s = s + foo[b] + "oo";
        } else {
            s = s + foo[b] + "eo";
        }
    }
    return s;
};

main();