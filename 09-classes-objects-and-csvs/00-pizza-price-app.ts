import { print } from "introcs";

import { Pizza } from "./Pizza";

import { price } from "./PizzaUtils";

export let main = async () => {

    // 1. Initialize a variable that holds a Pizza object and print it
    let aPizza = new Pizza();
    print(aPizza);
    // 2. Assign different values to each of its properties
    aPizza.size = "large";
    aPizza.extraCheese = false;
    aPizza.toppings = 3;
    print(aPizza);
    // 3. Compute and print its price with the imported price function
    print("The price of aPizza is");
    print(price(aPizza));
};

main();