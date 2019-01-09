import { print, random, promptString } from "introcs";

export let main = async () => {
    
    let isPlaying = true;
    while (isPlaying) {
        let question = await promptString("Ask a yes / no question...");
        print(randomResponse());

        let shouldContinue = await promptString("Ask another? yes / no");
        /* 
         * TODO:
         * If shouldContinue is equal to "yes"
         * then assign true to isPlaying. 
         * Otherwise, assign false to isPlaying
         */
        // if (shouldContinue === "yes") {
        //    isPlaying = true;
        //  } else {
         //   isPlaying = false;
        // }
        isPlaying = shouldContinue === "yes";
         
    }

    print("Have a great day.");
};

let randomResponse = (): string => {
    let responseCode = random(0, 2);
    if (responseCode === 0) {
        return "Most definitely not.";
    } else {
        if (responseCode === 1) {
            return "Ask again later.";
        } else {
            return "It is certain.";
        }
    }
};

main();