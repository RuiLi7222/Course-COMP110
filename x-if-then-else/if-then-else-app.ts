import { print, promptNumber } from "introcs";
export let main = async () => {
    print("I'm thinking of a number...");
    let guess = await promptNumber("Guess:");
    print("Your guess is...");
    if (guess === 42) {
        print("Correct!");
    } else {
        if (guess > 42) {
            print ("Too High!");
        } else {
            print ("Too Low!");
        }
    }
    print("Game Over");
};
main();