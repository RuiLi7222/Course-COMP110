import { print } from "introcs";
export let main = async() => {
    let arr: number[ ] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let b = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            b = b + arr[i];
        }
    }
    print(b);
};
main();  
