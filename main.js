import inquirer from "inquirer";
let user = true;
while (user == true) {
    const calci = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter 1 no:",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter 2 no:",
        },
        {
            name: "Operation",
            type: "list",
            message: "Choose an operator:",
            choices: ["Add", "Subt", "Mult", "Div", "mod", "Power", "square root"],
        },
    ]);
    if (calci.Operation === "Add") {
        console.log(`your required answer : ${calci.num1 + calci.num2}`);
    }
    else if (calci.Operation === "Subt") {
        console.log(`your required answer : ${calci.num1 - calci.num2}`);
    }
    else if (calci.Operation === "Mult") {
        console.log(`your required answer : ${calci.num1 * calci.num2}`);
    }
    else if (calci.Operation === "Div") {
        console.log(`your required answer : ${calci.num1 / calci.num2}`);
    }
    else if (calci.Operation === "mod") {
        console.log(`your required answer : ${calci.num1 % calci.num2}`);
    }
    else if (calci.Operation === "Power") {
        console.log(`your required answer : ${calci.num1 ** calci.num2}`);
    }
    else if (calci.Operation === "square root") {
        console.log(`your required answer of number 1 is : ${calci.num1 ** 1 / 2}`);
        console.log(`your required answer of number 2 is : ${calci.num2 ** 1 / 2}`);
    }
    user = false;
    let stop = await inquirer.prompt({
        message: "  do you want to exit our calci:",
        name: "stopie",
        type: "list",
        choices: ["yes", "no"],
    });
    if (stop.stopie === "yes") {
        user = false;
    }
    else {
        user = true;
    }
}
