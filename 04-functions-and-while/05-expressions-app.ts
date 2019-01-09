import { print, random, promptNumber } from "introcs";

export let main = async () => {
    
    let answer: number;

    // answer = 10 * 10 * 10;

    // The following assignment statements each use
    // a different kind of expression to reach the same
    // answer.

    // Use Variables
    let length = await promptNumber("Length:");
    
    // Calculate Explicitly
    // answer = length * length * length;
    
    // Exponentiation Operator
    // answer = length ** 3;

    // Function Call
    answer = cubeVolume(length);

    print("The volume of the cube is : " + answer);
    
};

let cubeVolume = (side: number): number => {
    return side ** 3;
};

main();