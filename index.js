#! /usr/bin env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\nWellcome to Kashaf word counter "));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellow("\nEnter a sentence")
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(chalk.green("\n\t-sentence words:\n"));
console.log(words);
console.log(chalk.magenta(`\n\t -Word count: ${words.length}`));
