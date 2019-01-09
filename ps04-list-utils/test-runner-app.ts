// TODO: Add the honor code pledge with your name and onyen here.
/**    
 * Author: Rui Li   
 * ONYEN: lirui
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

/** Import Test Helpers */
import { print } from "introcs";
import { cons } from "introcs/list";
import { test, testList } from "./test-util";

// TODO: Import functions as you write them
import { 
    last, 
    valueAt, 
    max,
    all,
    equals,
    scale,
    arrayToList,
    concat,
    sub,
    splice
} from "./list-utils";

export let main = async () => {
    
    print("List Utils Tests");

    // Some simple lists data to test with.
    // You should add your own lists, too!
    let numbers1 = cons(1, null);
    let numbers2 = cons(2, null);
    let numbers3 = cons(3, null);
    let numbers12 = cons(1, cons(2, null));
    let numbers123 = cons(1, cons(2, cons(3, null)));
    let numbers36 = cons(3, cons(6, null));
    let numbers121 = cons(1, cons(2, cons(1, null)));
    let numbers363 = cons(3, cons(6, cons(3, null)));
    let numbers000 = cons(0, cons(0, cons(0, null)));
    let numbers6126 = cons(6, cons(12, cons(6, null)));
    let numbers11223 = cons(1, cons(1, cons(2, cons(2, cons(3, null)))));

    let stringsA = cons("A", null);
    let stringsAB = cons("A", cons("B", null));
    let stringsABC = cons("A", cons("B", cons("C", null)));
    let stringsAA = cons("A", cons("A", null));
    let stringsAAA = cons("A", stringsAA);
    let stringsB = cons("B", null);
    let stringsBB = cons("B", cons("B", null));
    let stringsBCD = cons("B", cons("C", cons("D", null)));
    let stringsC = cons("C", null);
    let stringsCD = cons("C", cons("D", null));
    let stringsABCD = cons("A", cons("B", cons("C", cons("D", null))));
    let stringsCDAB = cons("C", cons("D", cons("A", cons("B", null))));
    let stringsACDB = cons("A", cons("C", cons("D", cons("B", null))));


    let booleansT = cons(true, null);
    let booleansF = cons(false, null);
    let booleansTF = cons(true, cons(false, null));
    let booleansTFF = cons(true, cons(false, cons(false, null)));

    // This constant is an alias for the smallest number possible.
    const MIN = Number.MIN_SAFE_INTEGER;

    // ================================    
    // Part 1. last
    print("Part 1. last");
    // Use Cases
    test("1.1 last(numbers1)", 1, last(numbers1));
    test("1.2 last(numbers12)", 2, last(numbers12));
    test("1.3 last(stringsA)", "A", last(stringsA));
    test("1.4 last(stringsAB)", "B", last(stringsAB));
    // Edge Cases
    test("1.5 last(null)", null, last(null));

    // ================================    
    // Part 2. valueAt
    print("Part 2. valueAt");
    // Use Cases
    test("2.1 valueAt(numbers121, 0)", 1, valueAt(numbers121, 0));
    test("2.2 valueAt(numbers121, 1)", 2, valueAt(numbers121, 1));
    test("2.3 valueAt(numbers121, 2)", 1, valueAt(numbers121, 2));
    test("2.4 valueAt(stringsABC, 0)", "A", valueAt(stringsABC, 0));
    test("2.5 valueAt(stringsABC, 1)", "B", valueAt(stringsABC, 1));
    test("2.6 valueAt(stringsABC, 2)", "C", valueAt(stringsABC, 2));
    // Edge Cases
    test("2.7 valueAt(numbers121, 3)", null, valueAt(numbers121, 3));
    test("2.8 valueAt(numbers121, -1)", null, valueAt(numbers121, -1));

    // ================================
    // Part 3. max
    // Use Cases
    print("Part 3. max");
    test("3.1 max(numbers1, MIN)", 1, max(numbers1, MIN));
    test("3.2 max(numbers121, MIN)", 2, max(numbers121, MIN));
    // Edge Cases
    test("3.3 max(null, MIN)", MIN, max(null, MIN));

    // TODO - You will need to write your own tests from here.

    // ================================
    // Part 4. all
    print("Part 4. all");
    // Use Cases - note, you will need to import this (and subsequent) function!
    test("4.1 all(stringsAB, A)", false, all(stringsAB, "A"));
    test("4.2 all(stringsAA, A)", true, all(stringsAA, "A"));
    test("4.3 all(stringsAAA, A)", true, all(stringsAAA, "A"));
    // Edge Cases
    test("4.4 all(null, A)", true, all(null, "A"));

    // ================================
    // Part 5. equals
    print("Part 5. equals");
    // Use Cases
    test("5.1 equals(stringsAB, stringsAB)", true, equals(stringsAB, stringsAB));
    test("5.2 equals(stringsAB, stringsBB)", false, equals(stringsAB, stringsBB));
    test("5.3 equals(stringsAB, stringsB)", false, equals(stringsAB, stringsB));
    // Edge Cases
    test("5.4 equals(null, null)", true, equals(null, null));
    test("5.5 equals(null, stringsAB)", false, equals(null, stringsAB));
    test("5.6 equals(stringsABC, null)", false, equals(stringsABC, null));

    /** 
     * Ensure your equals function is correctly implemented before 
     * continuing further!
     */

    // ================================
    // Part 6. scale
    print("Part 6. scale");
    // Use Cases
    // One example is shown below:
    testList("6.1 scale(numbers12, 3)", numbers36, scale(numbers12, 3));
    testList("6.2 scale(numbers121, 3)", numbers363, scale(numbers121, 3));
    testList("6.3 scale(numbers121, 6)", numbers6126, scale(numbers121, 6));
    testList("6.4 scale(numbers121, 0)", numbers000, scale(numbers121, 0));
    // Edge Cases
    testList("6.5 scale(null, 3)", null, scale(null, 3));
    testList("6.6 scale(null, 0)", null, scale(null, 0));
    
    // ================================
    // Part 7. arrayToList
    print("Part 7. arrayToList");
    // Use Cases
    testList("7.1 arrayToList([1, 2, 3], 0)", numbers123, arrayToList([1, 2, 3], 0));
    testList("7.2 arrayToList([A, B, C], 0)", stringsABC, arrayToList(["A", "B", "C"], 0));
    testList("7.3 arrayToList([true,false], 0)", booleansTF, arrayToList([true, false], 0));
    // Edge Cases
    testList("7.4 arrayToList([], 0)", null, arrayToList([], 0));

    // ================================
    // Part 8. concat
    print("Part 8. concat");
    // Use Cases
    testList("8.1 concat(stringsAB, stringsC)", stringsABC, concat(stringsAB, stringsC));
    testList("8.2 concat(stringsAB, stringsCD)", stringsABCD, concat(stringsAB, stringsCD));
    testList("8.3 concat(numbers1, numbers2)", numbers12, concat(numbers1, numbers2));
    testList("8.4 concat(numbers12, numbers3)", numbers123, concat(numbers12, numbers3));
    testList("8.5 concat(booleansT, booleansF)", booleansTF, concat(booleansT, booleansF));
    // Edge Cases
    testList("8.6 concat(null, null)", null, concat(null, null));
    testList("8.7 concat(null, stringsABCD)", stringsABCD, concat(null, stringsABCD));
    testList("8.8 concat(stringsABCD, null)", stringsABCD, concat(stringsABCD, null));
    

    // ================================
    // Part 9. sub
    print("Part 9. sub");
    // Use Cases
    testList("9.1 sub(stringsABCD, 2, 1)", stringsC, sub(stringsABCD, 2, 1));
    testList("9.2 sub(stringsABCD, 2, 2)", stringsCD, sub(stringsABCD, 2, 2));
    testList("9.3 sub(booleansTF, 1, 1)", booleansF, sub(booleansTF, 1, 1));
    testList("9.4 sub(numbers123, 0, 2)", numbers12, sub(numbers123, 0 , 2));
    // Edge Cases
    testList("9.5 sub(null, 2, 1)", null, sub(null, 2, 1));
    testList("9.6 sub(stringsABCD, 4, 1)", null, sub(stringsABCD, 4, 1));
    testList("9.7 sub(stringsABCD, -1, 1)", stringsA, sub(stringsABCD, -1, 1));
    testList("9.8 sub(stringsABCD, 1, 5)", stringsBCD, sub(stringsABCD, 1, 5));

    // ================================
    // Part 10. splice
    print("Part 10. splice");
    // Use Cases
    testList("10.1 splice(stringsAB, 1, stringsCD)", stringsACDB, splice(stringsAB, 1, stringsCD));
    testList("10.2 splice(numbers123, 1, strings12)", numbers11223, splice(numbers123, 1, numbers12));
    testList("10.3 splice(booleansTF, 1, booleansF", booleansTFF, splice(booleansTF, 1, booleansF));
    // Edge Cases
    testList("10.4 splice(null, 2, null)", null, splice(null, 2, null));
    testList("10.5 splice(stringsAB, 0, stringsCD)", stringsCDAB, splice(stringsAB, 0, stringsCD));
    testList("10.6 splice(stringsAB, 5, stringsCD)", stringsABCD, splice(stringsAB, 5, stringsCD));
    testList("10.7 splice(null, 5, stringsCD)", stringsCD, splice(null, 5, stringsCD));
    testList("10.8 splice(stringsAB, 5, null)", stringsAB, splice(stringsAB, 5, null));
};


main();