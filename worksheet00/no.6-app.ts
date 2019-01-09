import { print, promptNumber } from "introcs";
export let main = async () => {
    let num1 = await promptNumber("Please show your Number 1");
    let num2 = await promptNumber("please show your Number 2");

    let answer = compare(num1, num2);

    print(answer);
};
let compare = (x: number, y: number): number => {
    if (x < y) {
        return -1;
    } else {
        if (x > y) {
            return 1;
        } else {
            return 0;
        }
    }
};
main ();