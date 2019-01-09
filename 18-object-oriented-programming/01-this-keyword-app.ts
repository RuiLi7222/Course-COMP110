import { print } from "introcs";

class Point {
    x: number = 0;
    y: number = 0;

    // TODO #1: Add a toString method
    toString(): string {
        return this.x + ", " + this.y;
    }

}

export let main = async () => {

    let a = new Point();
    a.x = 1;
    a.y = 2;

    let b = new Point();
    b.x = 3;
    b.y = 4;

    // TODO #2: Call the toString method
    // on Point objects a and b and print
    // each return value.
    print(a.toString());
    print(b.toString());
};

main();
