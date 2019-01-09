import { print, random, promptString } from "introcs";

export let main = async () => {

    let question = await promptString("Ask a Yes/No Question");
    
    let response = "";
    
    // TODO: Move this logic to its own function
    

    print(response);

};

let randomResponse = (): string => {
    let responseCode = random(0, 2);
    if (responseCode === 0) {
        return "Most definitely not.";
    } else {
        if (responseCode === 1) {
            return"Ask again later.";
        } else {
            return "It is certain.";
        }
    }
};
main();