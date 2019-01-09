import { Prank } from "./7.1";
export let worstOnes = (input: Prank[]): string[] => {
    let output: string[] = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].estPrepTime > 60 && input[i].officeSuppliesWasted === true) {
            output[output.length] = input[i].label;
        }
    }
    return output;
};

export let pranksCommitted = (pranks: Prank[], person: string): number => {
    let a = 0;
    for (let i = 0; i < pranks.length; i++) {
        for (let j = 0; j < pranks[i].guiltyPeople.length; j++) {
            if (pranks[i].guiltyPeople[j] === person) {
                a++;
            }
        }
    }
    return a;
};