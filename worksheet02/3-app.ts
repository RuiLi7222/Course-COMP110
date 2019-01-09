import { print, promptString } from "introcs";
import { OfficeEmployee } from "./3.1";
import { dunderMifflin } from "./3.2";
export let main = async() => {
    let employee = new OfficeEmployee();
    employee.name =  await promptString("Which employee from the Office are you?");
    let activity: string = dunderMifflin(employee);
    print("My name is " + employee.name + " and I'm going to " + activity + ".");
    print(employee.yearsAtDM);
};
main();