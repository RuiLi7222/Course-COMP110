import { print, promptNumber } from "introcs";
export let main = async () => {
    let x = await promptNumber("What's the divisor x?");
    let y = await promptNumber("What's the dividend y?");

    let answer = modulo(x, y);

    print(answer);
};
let modulo = (x: number, y: number): number => {
    if (x < 0) {
        print("x should be possitive!");
        return x;
    } else {
        if (y < 0) {
            print("y should be possitive!");
            return y;
        } else {
            if (x < y) {
                return x;
            } else {    
                while (y <= x) {
                x = x - y;
                }
                return x;
            }
        }
    } 

};
main ();