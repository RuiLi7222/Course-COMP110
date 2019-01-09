/** Import Test Helpers */
import { testArray } from "./test-util";

import { fillZeros, fillRange } from "./array-functions";

export let main = async () => {
    
    // fillZeros Use Cases
    testArray("fillZeros(1)", [0], fillZeros(1));
    testArray("fillZeros(2)", [0, 0], fillZeros(2));
    // fillZeros Edge Cases
    testArray("fillZeros(-1)", [], fillZeros(-1));

    // fillRange Use Cases
    testArray("fillRange(0, 2)", [0, 1, 2], fillRange(0, 2));
    // TODO: Add another use case
    testArray("fillRange(1, 3)", [1, 2, 3], fillRange(1, 3));
    testArray("fillRange(1.1, 3.3)", [1.1, 2, 3, 3.3], fillRange(1.1, 3.3));
    testArray("fillRange(1.1, 3)", [1.1, 2, 3], fillRange(1.1, 3));
    testArray("fillRange(1, 3.3)", [1, 2, 3, 3.3], fillRange(1, 3.3));
    // TODO: Add an edge case
    testArray("fillRange(3, 1)", [], fillRange(3, 1));
};

main();