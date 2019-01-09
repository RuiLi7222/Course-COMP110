import { print } from "introcs";
export let main = async() => {
    let arr: number[ ] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            print(arr[i]);
        }
    }
};
main();  
