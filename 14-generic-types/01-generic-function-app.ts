import { print } from "introcs";

export let main = async () => {
    let a = cons("hello, world", null);
    let b = cons(110, null);
    // let b = cons<number>(110, null);
    let c = cons(false, null);

    print(a.data);
    print(b.data);
    print(c.data);

};

export class Node<T> {
    data: T;
    next: Node<T> = null;
}

// TODO: Define cons using generic types.
export let cons = <T>(data: T, next: Node<T>): Node<T> => {
    let n = new Node<T>();
    n.data = data;
    n.next = next;
    return n;
};

// export let consString = (data: string, next: Node<string>): Node<string> => {
   // let n = new Node<string>();
   // n.data = data;
   // n.next = next;
   // return n;
// };

// export let consNumber = (data: number, next: Node<number>): Node<number> => {
   // let n = new Node<number>();
    // n.data = data;
    // n.next = next;
    // return n;
// };

main();