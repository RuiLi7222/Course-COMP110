import { print } from "introcs";

export let main = async () => {

    // TODO: Rewrite these using concrete types
    // Explicit Typing
    let a: Node<string> = new Node<string>();
    a.data = "hello, world";

    // Type Inference
    let b = new Node<number>();
    b.data = 110;

    let c = new Node<boolean>();
    c.data = true;

    print(a.data);
    print(b.data);
    print(c.data);

};

// TODO: Define a new generic Node class
class Node<T> {
    data: T;
    next: Node<T> = null;
}

main();