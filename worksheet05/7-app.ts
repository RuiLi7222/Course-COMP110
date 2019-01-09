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
export let main = async () => {
    print(toString(willBeIncluded));
};

let companies = listify(["Walmart", "Target", "Bed Bath and Beyond", "Costco", "Mediterranean Deli", "Mellow Mushroom"]);
let insertFunctionalLiteralHere = (input: string) => input.length < 10;
let willBeIncluded = filter(companies, insertFunctionalLiteralHere);

main();
