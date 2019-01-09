/*
* 
* Author: Rui Li
* 
* ONYEN: lirui
* 
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/

import { print, promptNumber, promptString } from "introcs";
export let main = async () => {
    // TODO: Put all of your code here
    let alive = true;
    let thirstLevel = 50;
    let bearLikeliness = 50;
    let isHarvestTime = false;
    let day = 0;
    let beetsCount = 10;
    while (isHarvestTime === false && alive === true ) {
        print("Your farming days  " + day);
        let waterSprayOrHarvest = await promptString("Do you want to water, spray, or harvest your " + beetsCount + " beets? Type 'water', 'spray', or 'harvest'.");
        if (waterSprayOrHarvest === "water") {
            print(beetsCount + " beets have been watered!");
            thirstLevel = thirstLevel - 10;
            bearLikeliness = bearLikeliness + 10;
            beetsCount = beetsCount + 2;
        } else {
            if (waterSprayOrHarvest === "spray") {
                print(beetsCount + " beets have been sprayed!");
                thirstLevel = thirstLevel + 10;
                bearLikeliness = bearLikeliness - 5;
            } else {
                if (waterSprayOrHarvest === "harvest") {
                    print(beetsCount + " beets have been harvested!");
                    isHarvestTime = true;
                } else {
                    print(beetsCount + " beets were not watered, sprayed, or harvested.");
                    thirstLevel = thirstLevel + 10;
                    bearLikeliness = bearLikeliness + 10;
                }
            }
        }
        if (thirstLevel <= 0) {
            alive = false;
            print("Your " + beetsCount + " beets have been overwatered.");
        } else {
            if (thirstLevel > 100) {
                alive = false;
                print("Your " + beetsCount + " beets have been dehydrated.");
            } else {
                if (bearLikeliness >= 100) {
                    alive = false;
                    print("Your " + beetsCount + " beets were eaten by bears.");
                }
            }
        }
        if (alive === true && isHarvestTime === false) {
            print("Your " + beetsCount + " beets are alive!");
            print("Thirst Level of " + beetsCount + " beets: " + thirstLevel);
            print("Likeliness of bear attack of " + beetsCount + " beets: " + bearLikeliness);
            day = day + 1;
        }
    }
    if (alive === true && isHarvestTime === true) {
        print("Your " + beetsCount + " beets were harvested after " + day + " days :)");
        } else {
            print("This means that " + beetsCount + " have died after " + day + " days :(");
        }
};
main ();