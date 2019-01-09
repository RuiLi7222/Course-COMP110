import { Pizza } from "./Pizza";

export let price = (pizza: Pizza): number => {
    let cost = 0;
    if (pizza.size === "small") {
        cost = 7;
    } else if (pizza.size === "medium") {
        cost = 9;
    } else if (pizza.size === "large") {
        cost = 11;
    }
    // Base Price
    // - small: $7
    // - medium: $9
    // - large: $11
    if (pizza.extraCheese === true) {
        cost += 1;
    }
    // Extra cheese adds $1

    // Each topping adds $0.75
    cost += pizza.toppings * 0.75;
    return cost;
};
