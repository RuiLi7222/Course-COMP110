import { forward, left, setSpeed } from "introcs/turtle";

export let main = async () => {
    setSpeed(0.1);

    // TODO: Draw a square using forward and left procedures
    
    let i = 0;
    while (i < 100) {
        forward(200);
        left(Math.PI / 2);
        i++;
    }
};

main();