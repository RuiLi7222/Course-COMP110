import { print } from "introcs";
import { Node, cons, first, rest, listify } from "introcs/list";

let main = async () => {
    let input = listify(-2, -1, 0, 1, 2);
    // TODO #3: Try calling filter with different predicates
    let output = filter(input, isZero);
    print(output); 
};

// Predicates "Test Functions"
let isPositive: Predicate = (item: number): boolean => {
    return item > 0;
};

let isNegative = (item: number): boolean => { return item < 0; };
let isZero = (item: number): boolean => { return item === 0; };

// TODO #1: Define a functional interface for Predicate
interface Predicate {
    (item: number): boolean;
}

// TODO #2: Add a parameter to supply the test function, fix the implementation
let filter = (xs: Node<number>, test: Predicate): Node<number> => {
    if (xs === null) {
        return null;
    } else if (isPositive(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

main();