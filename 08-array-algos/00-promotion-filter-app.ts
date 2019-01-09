import { print } from "introcs";

export let main = async () => {
    let staff = ["Tabatha", "Kaki", "Kit", "Lydia", "Mary", "Alana", "Shane", "Madison", "Heather", "Sirine", "Morgan", "Natalie", "Kristina"];
    let promotion = filterByNamePredicate(staff);
    print("The promotion goes to...");
    print(promotion);
};

let filterByNamePredicate = (names: string[]): string[] => {
    let matches = [];
    for (let i = 0; i < names.length; i++) {
        if (namePredicate(names[i])) {
            matches[matches.length] = names[i];
        }
    }
    return matches;
};

let namePredicate = (name: string): boolean => {
    return name[0] === "K" && name.length % 2 === 1;
};

main();