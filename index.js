#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number",
    }
]);
if (pinanswer.pin === mypin) {
    console.log("Correct pin code!!");
    let operationsanswer = await inquirer.prompt([
        {
            name: "operations",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    console.log(operationsanswer);
    if (operationsanswer.operations.toLowerCase() === "withdraw") {
        let amountanswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountanswer.amount;
        console.log("Your current remaining balance is: " + myBalance);
    }
    else if (operationsanswer.operations.toLowerCase() === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
