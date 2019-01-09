import { print } from "introcs";
import { OfficeEmployee } from "./3.1";
export let dunderMifflin = (e: OfficeEmployee): string => {
    if (e.name === "Michael") {
        print("That's what she said!");
        e.yearsAtDM = 12;
        return "be the world's best boss！";
    } else if (e.name === "Jim") {
        return "move Dwight's desk into teh Men's bathroom";
    }
    return "plan an awesome office party";
};