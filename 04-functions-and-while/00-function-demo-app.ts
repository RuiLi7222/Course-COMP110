import { print, promptNumber } from "introcs";

export let main = async () => {

    let input = await promptNumber("Enter a number");
    
    // TODO: Call the function f
    let answer: number = f(input);

    print(answer);

};

// TODO: Define the function f
let f = (x: number): number => {
    return (3 * x) + 1;
};

main();