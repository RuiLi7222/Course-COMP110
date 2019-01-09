import { print, promptString, promptNumber, promptBoolean } from "introcs";
export let main = async () => {
    let b = await promptNumber("Number?");

    let d = getName(b);
    print(d);
};
let isEven = (x: number): boolean => {
    return x % 2 === 0;
};
let getName = (y: number): string => {
    if (isEven(y)) {
        return "Michael";
    } else {
        if (y === 4) {
            return "Dwight";
        } else {
            if (y === 3) {
                return "Jim";
            }
            return "Stantly";
        }
    }
};
main ();