import { print } from "introcs";
import { setSprinkles, priceHike } from "./4.2";
import { Donut } from "./4.1";
export let main = async() => {
    let a = new Donut();
    a.filling = true;
    a.glazed = true;
    a.springkles = true;
    print(setSprinkles(a));
    print(priceHike(a));
};
main();