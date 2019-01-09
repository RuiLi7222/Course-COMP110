import { swapNum, swapArr } from "./5";
import { print } from "introcs";
export let main = async() => {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let x = 0;
    let y = 2;
    swapNum(x, y);
    swapArr(arr1, arr2, y);
    print(x);
    print(y);
    print(arr1);
    print(arr2);
};
main();