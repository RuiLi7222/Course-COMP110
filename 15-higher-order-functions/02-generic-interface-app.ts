import { print } from "introcs";
import { Node, cons, first, rest, listify } from "introcs/list";

let main = async () => {
    let input = listify(-2, -1, 0, 1, 2);
    let output = filter(input, isPositive);
    print(output);

    // TODO #3 uncomment and use the generic filter function
    let words: Node<string> = listify("The", "quick", "brown", "fox");
    let result: Node<string> = filter(words, is3Letters);
    // print(filter(words, is3Letters));
};

// Predicates "Test Functions"
let isPositive = (item: number): boolean => { return item > 0; };
let is3Letters = (item: string): boolean => { return item.length === 3; };
let startsWithB = (item: string): boolean => { return item[0] === "b"; };

// TODO #1: Make the Predicate interface generic
interface Predicate<T> {
    (item: T): boolean;
}

// TODO #2: Make the filter function generic
let filter = <T>(xs: Node<T>, test: Predicate<T>): Node<T> => {
    if (xs === null) {
        return null;
    } else if (test(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

main();