import { print, random, promptString } from "introcs";

export let main = async () => {

    let question = await promptString("Ask a Yes/No Question");
    
    let response: number;
    // TODO #0 - Assign response a random number between 0 and 2
    response = random(0, 2);
    print(response);
    // TODO #1 - Implement the response message logic 
    if (response === 0) {
        print("Very doubtful");
    } else {
    if (response === 1) {
        print("Ask again later");
        } else {
        print("It is certain");
        }
    }
    
};

main();