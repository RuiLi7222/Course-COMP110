import { print } from "introcs";
import { sneak } from "./6.2";
export let main = async() => {
    let arr = ["Sarah", "Phil", "Andre", "Shelby"];
    let pos: number = 3;
    sneak(arr, pos);
    print(arr);
    print(pos);
};
main();