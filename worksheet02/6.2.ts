import { print } from "introcs";
import { sidekick } from "./6.1";
export let sneak = (peep: string[], loc: number): void => {
    for (let i: number = 0; i < peep.length; i++) {
        if (i === loc) {
            peep[i] = "Hank";
            sidekick(peep, loc + 1);
        }
    }
    print(loc);
};