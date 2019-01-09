import { forward, left, setSpeed } from "introcs/turtle";

export let main = async () => {
    setSpeed(0.01);
    star(5, 100, 4 / 5 * Math.PI);
    
};

let star = (points: number, diameter: number, angle: number): void => {
    for (let i = 0; i < points; i++) {
        forward(diameter);
        left(angle);  
    }
    
};

main();