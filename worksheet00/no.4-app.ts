import { print, promptString, promptNumber } from "introcs";
export let main = async () => {
    let str = await promptString("Write your own beat");
    let n = await promptNumber("Repeat Times?");

    let answer = repeatBeat(str, n);

    print(answer);
};
let repeatBeat = (x: string, y: number): string => {
   if (y <= 0) {
       return "";
   } else {    
        if (y === 1) {
           return x; 
        } else {
            let z = x;
            let i = 0;
            while (i < y - 1) {
            x = z + " " + x; 
            i++;
            }
            // x = repeatBeat(x, y - 1) + " " + repeatBeat(x, 1);
            return x;
        }
    }   
        
};   

main();