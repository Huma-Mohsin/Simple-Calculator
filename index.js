import inquirer from "inquirer"; //inquirer jb b impport karwana hy toh cmd par just tsc sy compile karna hy wrna tsc index.ts sy error aye ga.
const answers = await inquirer.prompt([
    //1 object
    { message: "Enter 1st number:",
        type: "number",
        name: "FirstNumber"
    },
    //2nd object
    {
        message: "Enter 2nd number:",
        type: "number",
        name: "SecondNumber"
    },
    //3rd object
    {
        message: "Enter any operator:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"] //choices in an array
    }
]);
//conditional statement
if (answers.operator === "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Divison") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("please select valid operator");
}
