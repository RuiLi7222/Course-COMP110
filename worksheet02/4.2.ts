import { Donut } from "./4.1";
export let setSprinkles = (a: Donut): Donut => {
    if (a.springkles === true) {
        a.springklesAmount = 30;
    } else {
        a.springklesAmount = 0;
    }
    return a;
};

export let priceHike = (b: Donut): Donut => {
        if (b.springkles === true) {
            b.cost ++;
        }
        if (b.glazed === true) {
            b.cost ++;
        }
        if (b.filling === true) {
            b.cost ++;
        }
        return b;
};