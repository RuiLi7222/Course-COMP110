import { print } from "introcs";

import { cons, first, rest, Node, listify, toString } from "./list";
interface Predicate<T> {
    (item: T): boolean;
}
let filter = <T>(xs: Node<T>, test: Predicate<T>): Node<T> => {
    if (xs === null) {
        return null;
    } else if (test(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

// Map

interface Transform<T, U> {
    (item: T): U;
}
let map = <T, U> (xs: Node<T>, f: Transform<T, U>): Node<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

// Reduce

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

let reduce = <T, U> (xs: Node<T>, f: Reducer<T, U>, memo: U): U => {
    if (xs === null) {
        return memo;
    } else {
        return reduce(rest(xs), f, f(memo, first(xs)));
    }
};

let select = (x: string) => {
    return x.length === 4 || x.length === 8;
};

let oddEven = (x: number) => x % 2 === 1;
let questions = (x: string) => x + "??"; 
let len = (x: string) => x.length;
let c1 = (m: string, e: string): string => {
    return m + " " + e;
};
let c2 = (m: string, e: number): string => {
    return e + " " + m;
};
let mult = (m: number, e: number): number => {
    return m * e;
};

export let main = async () => {
    let coolNewList: Node<string> = listify(["What", "happened", "to", "our", "water"]);
    print(reduce(map(filter(coolNewList, select), questions), c1, ""));
    print(reduce(filter(map(coolNewList, len), oddEven), mult, 1));
    print(reduce(map(coolNewList, len), c2, "!"));
    print(toString(map(map(filter(coolNewList, select), len), (x) => x + 5)));
};

main();