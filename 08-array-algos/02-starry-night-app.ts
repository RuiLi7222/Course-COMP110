import { forward, left, setSpeed, moveTo, setOnClick } from "introcs/turtle";

export let main = async () => {
    setSpeed(Infinity);

    // TODO #2 - Place a Star at 100, 100
    placeStar(400, 400);

};

let placeStar = (x: number, y: number): void => {
    // TODO - Place a Star and Generate Randomly
    moveTo(x, y);
    let points = 5;
    let diameter = 100;
    let radius = Math.random() * Math.PI / 4;
    radius += Math.PI / 4;
    star(points, diameter, radius);
    
};

let star = (points: number, diameter: number, angle: number): void => {
    for (let i = 0; i < points; i++) {
        forward(diameter);
        left(angle);
    }
};

main();