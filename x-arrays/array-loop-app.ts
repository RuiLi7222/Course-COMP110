import { print } from "introcs";

export let main = async () => {
    
    let a: number[] = [1, 2, 3, 4, 5, 6, 7];

    print(a);
    
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i];
    }

    print (a);
};

main();