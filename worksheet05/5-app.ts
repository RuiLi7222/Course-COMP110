import { print } from "introcs";

import { cons, first, rest } from "./list";

class Node<T> {
    data: T;
    next: Node<T> = null;
}


export let main = async () => {
  print(reverse(cons(1, cons(2, cons(3, null)))));
  print(reverse(cons("11", cons("22", cons("33", null)))));
  print(reverse(cons(true, cons(false, cons(true, null)))));
};

let reverse = <T>(list: Node<T>): Node<T> => {
    let reverseRecur = <T>(list: Node<T>, out: Node<T>): Node<T> => {
        if (list === null) {
            return null;
        } else {
            out = cons(first(list), out);
            reverseRecur(rest(list), out);
            return out;
            
        }
    };

    return reverseRecur(list, null);
};

main();
