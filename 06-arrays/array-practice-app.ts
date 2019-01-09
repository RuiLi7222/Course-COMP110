import { fillZeros, fillRange, sum } from "./array-functions";

import { testArray, testNumber } from "./test-util";

export let main = async () => {
    
    // TODO: Add Test Cases
    testArray("First Test", [0], fillZeros(1));
    testArray("2nd Test", [0, 0], fillZeros(2));
    testArray("fillZeros(0)", [], fillZeros(0));
    testArray("fillZeros(-1)", [], fillZeros(-1));

    testArray("fillRange(0, 3)", [0, 1, 2, 3], fillRange(0, 3));
    testArray("fillRange(0, 2)", [0, 1, 2], fillRange(0, 2));
    testArray("fillRange(3, 0)", [], fillRange(3, 0));

    testNumber("sum([])", 0, sum([]));
    testNumber("sum([1])", 1, sum([1]));
    testNumber("sum([2, 3])", 5, sum([2, 3]));

};

main();