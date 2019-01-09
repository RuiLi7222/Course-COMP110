import { print, promptNumber } from "introcs";

export let main = async () => {

    print("Hello. It's me again... your computer...");
    let n = await promptNumber("How much do you love me?");
    
    // TODO: Loop!
    let i = 0;
    while (i < 0) {
        print("I love you ;)" + i);
        i = i + 1;
    }


};

main();