import { print, promptString } from "introcs";

export let main = async () => {

    let a = await promptString("Enter a");
    let b = await promptString("Enter b");

    print("Before swapping a and b...");
    print("a is " + a);
    print("b is " + b);

    // TODO: Swap the values stored in a and b
    {
        let temp = a;
        a = b;
        b = temp;
    }


    print("After swapping a and b...");
    print("a is " + a);
    print("b is " + b);
};

main();