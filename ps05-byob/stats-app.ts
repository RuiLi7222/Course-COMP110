/**
 * Author: Rui Li
 *
 * ONYEN: lirui
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */


import { print, csvToArray } from "introcs";
import { makeBracket } from "./bracket";

// Player Class
export class Player {
    team: string = "";
    season: number = 0;
    conference: string = "";
    winPercent: number = 0;
    avgPoints: number = 0;
    player: string = "";
    gamesPlayed: number = 0;
    gamesStarted: number = 0;
    avgMinutesPerGame: number = 0;
    fieldGoalPercent: number = 0; // field goals; all goals except free throws
    twoPointPercent: number = 0;
    threePointPercent: number = 0;
    freeThrowPercent: number = 0;
    avgReboundsPerGame: number = 0;
    avgAssistsPerGame: number = 0;
    avgStealsPerGame: number = 0;
    avgBlocksPerGame: number = 0;
    avgTurnoversPerGame: number = 0;
    avgPointsPerGame: number = 0;
    coach: string = "";
}

// Functional Interfaces
interface Predicate<T> {
    (item: T): boolean;
}    

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

interface Transform<T, U> {
    (item: T): U;
}

export let main = async () => {
    let data = await csvToArray("NCAA Data", Player);

    // TODO: 2.8 Print Report -- using: getSeasonMVP, avgTotalPoints, and numAboveAvgPts
    print(getSeasonMVP(data));

    print(avgTotalPoints(data));

    print(numAboveAvgPoints(data));

    // TODO: 3.3 Generate Bracket -- Use makeBracket
    makeBracket(winner, data);
};

// TODO: 1.1-1.3 Filter, Map, Reduce
export let filter = <T>(a: T[], f: Predicate<T>): T[] => {
    let b: T[] = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            b[b.length] = a[i];
        }
    }
    return b;
};

export let map = <T, U>(a:T[], f: Transform<T, U>): U[] => {
    let b: U[] = [];
    for (let i = 0; i < a.length; i++) {
        b[i] = f(a[i]);
    }
    return b;

};

export let reduce = <T, U>(a: T[], f: Reducer<T, U>, memo: U): U => {
    for (let i = 0; i < a.length; i++) {
        memo = f(memo, a[i]);
    }
    return memo;
};


// TODO: 2.1 reduceByMaxPoints
export let reduceByMaxPoints = (a: Player, b: Player): Player => {
    if (a.avgPointsPerGame >= b.avgPointsPerGame) {
        return a;
    } else {
        return b;
    }
};

// TODO: 2.2 getSeasonMVP
export let getSeasonMVP = (a: Player[]): Player => {
    let output = new Player();
    for (let i = 0; i < a.length; i++) {
        output = reduceByMaxPoints(output, a[i]);
    }
    return output;
};

// TODO: 2.3 mapToPoints
export let mapToPoints: Transform<Player, number> = (p) => p.avgPointsPerGame;
 

// TODO: 2.4 sum
export let sum: Reducer<number, number> = (a, b) => a + b;

// TODO: 2.5 avgTotalPoints
export let avgTotalPoints = (a: Player[]): number => {
    return reduce(map(a, mapToPoints), sum, 0) / a.length;
};

// TODO 2.6 aboveAvgPoints
export let aboveAvgPoints: Predicate<Player> = (p) => p.avgPointsPerGame > 6.094696156323789;

// TODO 2.7 numAboveAvgPoints
export let numAboveAvgPoints = (a: Player[]): number => {
    let output = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].avgPointsPerGame > avgTotalPoints(a)) {
            output ++;
        }
    }
    return output;
}; 

// TODO: 3.1 playerScorer
export let playerScorer = (p: Player): number => {
    return p.avgPointsPerGame + p.avgAssistsPerGame;
};

// TODO 3.2 winner
export let winner = (n1: string, n2: string, a: Player[]): string => {
    let team1 = filter(a, (p: Player) => p.team === n1);
    let score1 = reduce(map(team1, (p: Player) => playerScorer(p)), sum, 0);
    let team2 = filter(a, (p: Player) => p.team === n2);
    let score2 = reduce(map(team2, (p: Player) => playerScorer(p)), sum, 0);
    if (score1 >= score2) {
        return n1;
    } else {
        return n2;
    }
    
};

main();