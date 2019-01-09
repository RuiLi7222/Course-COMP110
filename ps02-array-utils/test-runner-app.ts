// TODO: Add Honor Code Header
/*
 *
 * Author: Rui Li
 *
 * ONYEN: lirui
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */

/** Import Test Helpers */
import { testNumber, testArray, testBoolean } from "./test-util";

// TODO: Import functions as you write them
import { count, max, has, all, equals, cycle, concat, sub, splice } from "./array-utils";

export let main = async () => {
    
    // Part 1. count
    // Use Cases
    testNumber("count([10, 20], 20)", 1, count([10, 20], 20));
    testNumber("count([20, 20], 20)", 2, count([20, 20], 20));
    // Edge Cases
    testNumber("count([], 20)", 0, count([], 20));
    testNumber("count([10, 30], 20)", 0, count([10, 30], 20));

    // Part 2. max
    // Use Cases
    testNumber("max([10, 20])", 20, max([10, 20]));
    testNumber("max([20, 20])", 20, max([20, 20]));
    // Edge Cases
    testNumber("max([])", Number.MIN_VALUE , max([]));

    // Part 3. has
    // Use Cases
    testBoolean("has([1, 2, 3], 1)", true, has([1, 2, 3], 1));
    testBoolean("has([1, 2, 3], 4)", false, has([1, 2, 3], 4));
    // Edge Cases
    testBoolean("has([], 2)", false, has([], 2));

    // Part 4. all
    // Use Cases
    testBoolean("all([1, 2, 3], 1)", false, all([1, 2, 3], 1));
    testBoolean("all([1, 1, 1], 1)", true, all([1, 1, 1], 1));
    // Edge Cases
    testBoolean("all([], 1)", false, all([], 1));

    // Part 5. equals
    // Use Cases
    testBoolean("equals([1, 2, 3], [1, 2, 3])", true, equals([1, 2, 3], [1, 2, 3]));
    testBoolean("equals([3, 2, 1], [1, 2, 3])", false, equals([3, 2, 1], [1, 2, 3]));
    // Edge Cases
    testBoolean("equals([], [])", true, equals([], []));
    testBoolean("equals([], [1, 2, 3])", false, equals([], [1, 2, 3]));

    // Part 6. cycle
    // Use Cases
    testArray("cycle(4, 5)", [1, 2, 3, 4, 1], cycle(4, 5));
    testArray("cycle(4, 3)", [1, 2, 3], cycle(4, 3));
    // Edge Cases
    testArray("cycle(1, 0)", [], cycle(1, 0));
    testArray("cycle(-1, 1)", [], cycle(-1, 1));

    // Part 7. concat
    // Use Cases
    testArray("concat([1, 2, 3], [1])", [1, 2, 3, 1], concat([1, 2, 3], [1]));
    testArray("concat([2], [4])", [2, 4], concat([2], [4]));
    // Edge Cases
    testArray("concat([], [1])", [1], concat([], [1]));
    testArray("concat([], [])", [], concat([], []));

    // Part 8. sub
    // Use Cases
    testArray("sub([1, 2, 3], 0, 2)", [1, 2], sub([1, 2, 3], 0, 2));
    testArray("sub([1, 2, 3], 0, 1)", [1], sub([1, 2, 3], 0, 1));
    // Edge Cases
    testArray("sub([1, 2, 3], -1, 1)", [1], sub([1, 2, 3], -1, 1));
    testArray("sub([1, 2, 3], 0, 4)", [1, 2, 3], sub([1, 2, 3], 0, 4));
    testArray("sub([1], 0, 0)", [], sub([1], 0, 0));
    testArray("sub([], 0, 3)", [], sub([], 0, 3));

    // Part 9. splice
    // Use Cases
    testArray("splice([7, 8], 1, [4, 5])", [7, 4, 5, 8], splice([7, 8], 1, [4, 5]));
    testArray("splice([1, 2, 3], 0, [4])", [4, 1, 2, 3], splice([1, 2, 3], 0, [4]));
    // Edge Cases
    testArray("splice([1], -1, [2])", [2, 1], splice([1], -1, [2]));
    testArray("splice([1], 2, [2])", [1 , 2], splice([1], 2, [2]));
};

main();