/** 
 * Author: Rui Li* 
 * ONYEN: lirui* 
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received 
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff, 
 * the problem set code I am submitting. 
 */

import { print, csvToArray } from "introcs";
 
class Clue {
    person: string = "";
    hairColor: string = "";
    weapon: string = "";
    desk:number = 0;
    note: string = "";
    hasPencil: boolean = false;
}

export let main = async() => {
    let data: Clue[] = await csvToArray("Clue Data", Clue);
    print(data); // TODO: Remove this line once your data is printed
    // TODO: Your function calls go inside of this block
    let filtered1: Clue[] = filterOutBlonde(data);
    print(filtered1);

    let clue1: string = findClue1(data);
    print("The Clue 1: " + clue1);

    let x: number[] = [1, 2, 3];
    print(sum(x)); // Prints 6
    print(average(x)); // Prints 2

    let filtered2: Clue[] = filterAboveDeskNumber(data, 20);
    print(filtered2); // Only displays clues whose desk property is great

    let filtered3: Clue[] = filterByHairColor(data, "blue");
    print(filtered3); // Only displays clues whose hair color property is blue

    let deskNumbers: number[] = mapToDeskNumber(data);
    print(deskNumbers); // Only displays the desk numbers of each Clue

    let clue2: string = findClue2(data);
    print("The Clue 2:" + clue2);

    let thief: string = findThief(data);
    print("Thief: " + thief);
};
 // TODO: Define your functions here
export let filterOutBlonde = (a: Clue[]): Clue[] => {
    let b: Clue[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].hairColor !== "blonde") {
            b[b.length] = a[i];
        }
    }
    return b;
};

export let nth = (arr: Clue[], index: number): Clue => {   
    return arr[index];

};

export let findClue1 = (arr: Clue[]): string => {
    return nth(filterOutBlonde(arr), 4).note;
};

export let sum = (arr: number[]): number => {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        a = a + arr[i];
    }
    return a;
};

export let average = (arr: number[]): number => {
    let a = 0;
    if (arr.length === 0) {
        return 0;
    } else {
        a = sum(arr) / arr.length;
    }
    return a;
};

export let filterAboveDeskNumber = (arr: Clue[], desk: number): Clue[] => {
    let a: Clue[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].desk > desk) {
            a[a.length] = arr[i];
        }
    }
    return a;
};

export let filterByHairColor = (arr: Clue[], hairColor: string): Clue[] => {
    let a: Clue[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hairColor === hairColor) {
            a[a.length] = arr[i];
        }
    }
    return a;
};

export let mapToDeskNumber = (arr: Clue[]): number[] => {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a[a.length] = arr[i].desk;
    }
    return a;
};

export let findClue2 = (arr: Clue[]): string => {
    let brownHair = filterByHairColor(arr, "brown");
    print(brownHair);
    let deskBrownHiar = mapToDeskNumber(arr);
    print(arr);
    let averageDesk = average(deskBrownHiar);
    print(averageDesk);
    let above = (filterAboveDeskNumber(brownHair, averageDesk));
    print(above);
    return nth(above, 2).note;   
};

export let findPencil = (arr: Clue[]): Clue[] => {
    let a: Clue[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasPencil === true) {
            a[a.length] = arr[i];
        }
    }
    return a;
};

export let chiliWeapon = (arr: Clue[]): Clue => {
    let a = new Clue;
    for (let i = 0; i < arr.length; i++) {      
        if (arr[i].weapon === "chili") {
           return arr[i];
        }        
    }
    return a;
};

export let findThief = (arr: Clue[]): string => {  
    return chiliWeapon(findPencil(arr)).person;
};


main();