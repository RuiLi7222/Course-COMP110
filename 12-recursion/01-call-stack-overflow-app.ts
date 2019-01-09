import { print } from "introcs";

let main = (): void => {
    print("Enter main()");
    f(10);
    print("Leave main()");
};

let f = (n: number): void => {
    print("Enter f(" + n + ")");
    if (n <= 0) {
        print("Base case!");
    } else {
        f(n - 1);
    }
    print("Leave f(" + n + ")");
};

main();