import { print, promptNumber  } from "introcs";
export let main = async ( ) => {
    let n = await promptNumber("How many?");
    
    for (let i = 0; i < n; i++) {
        print(i);
    }

    for (let i = n - 1; i >= 0; i--) {
        print(i);
    }
};  

main();