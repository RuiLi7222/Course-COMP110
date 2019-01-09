import { forward, left } from "introcs/turtle";
import { print } from "introcs";
export let main = async () => {
    spiralEdge(100);
};

let spiralEdge = (length: number): void => {
    // TODO
    if (length <= 0 ) {
        print("Base Case!");
    } else {
        forward(length);
        left(Math.PI / 2);
        spiralEdge(length - 2);
    }
};

main();