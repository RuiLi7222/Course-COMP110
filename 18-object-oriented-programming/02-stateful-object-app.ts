import { print } from "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    translate(dx: number, dy: number): void {
        // TODO #1
        this.x += dx;
        this.y += dy;
    }

    toString(): string {
        return this.x + ", " + this.y;
    }

}

export let main = async () => {

    let a = new Point();
    print(a);
    // TODO #2: Call translate again
    a.translate(2, 3);
    print(a);
    // TODO #3: Call translate again
    a.translate(4, 5);
    print(a);

};

main();