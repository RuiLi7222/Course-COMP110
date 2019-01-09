// import { print, promptNumber } from "introcs";
import { CakeMix, Cake } from "./1";

// export let main = async () => {
    // length = await promptNumber("What's the length of your cake?");
    // width = await promptNumber("What's the width of your cake?");
export let bakeCake = (mix: CakeMix, length: number, width: number): Cake => {
        let aCake = new Cake();
        aCake.length = length;
        aCake.width = width;
        aCake.flavor = mix.flavor;
        aCake.springkles = mix.springklesPerSqIn * length * width;
        return aCake;
    };
// } ;
// main();