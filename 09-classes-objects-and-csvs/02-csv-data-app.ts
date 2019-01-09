import { print, csvToArray } from "introcs";

class Game {
    date: string = "";
    opponent: string = "";
    outcome: string = "";
    points: number = 0;
    fouls: number = 0;
}

export let main = async()  => {
    
    let data = await csvToArray("Select joel-berry-ii.csv", Game);
    
    print(data);

};

let filterDoubleDigitPoints = (games: Game[]): Game[] => {
    let matches: Game[] = [];
    
    // TODO
    for (let i = 0; i < games.length; i++) {
        if (games[i].points >= 10) {
            matches[matches.length] = games[i];
        }
    }

    return matches;
};

main();