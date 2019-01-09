import { print } from "introcs"; 
export let alarmClock = (x: number[]): void => {
    let beep: string = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            beep = beep + "beep";
        }
        if (x[i] < 4) {
            beep = beep + "beep";
        }
    }
    print(beep);
};