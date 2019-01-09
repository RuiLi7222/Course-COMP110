import { print , promptNumber } from "introcs";
import { CakeMix } from "./1"; 
import { bakeCake } from "./1.1";
export let main = async () => {
    let a = await promptNumber("What's the length of your cake?");
    let b = await promptNumber("What's the width of your cake?");
    let c = new CakeMix();
    print(bakeCake(c, a, b));

};
main();