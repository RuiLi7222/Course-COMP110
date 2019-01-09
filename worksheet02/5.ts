import { print } from "introcs";
export let swapNum = (x: number, y: number): void => {
    let temp = x;
    x = y;
    y = temp;
};

export let swapArr = (x: number[], y: number[], z: number): void => {
    let temp1 = x;
    x = y;
    y = temp1;
    for (let i = 0; i < x.length / 2; i++) {
        let temp2 = x[z + i];
        x[z + i] = y[z + i];
        y[z + i] = temp2;
    }
};