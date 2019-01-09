import { print } from "introcs";

class Point {
    x: number = 0;
    y: number = 0;

    // TODO: Add a sayHello Method
    sayHello(): void {
        print("Hello World");
    } 

}

export let main = async () => {

    let p0 = new Point();
    // TODO: call sayHello
    p0.sayHello();

};

main();