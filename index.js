import inquirer from "inquirer";
import fs from "fs";

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// // const inquirer = require("inquirer");
// const path = require("path");
// // const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");
var a;
inquirer
  .prompt([
    {
      type: "input",
      message: "enter the team manager's name :",
      name: "tmName",
    },
    {
      type: "input",
      message: "Enter the team manager's EMP ID:",
      name: "tmID",
    },
    {
      type: "input",
      message: "Enter the team manager's Address :",
      name: "tmAddress",
    },
    {
      type: "expand",
      message:
        "When a user enters those requirements, the user is presented with a menu with the option to",
      name: "options",
      choices: [
        {
          key: "e",
          value: "Add an engineer",
        },
        {
          key: "i",
          value: "Add an intern",
        },
      ],
    },
  ])
  .then((response) => {
    fs.writeFile(
      "index.html",
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
      <h1>The Title of The Project : ${(a = response.options)}\n</h1>    
      </body>
      </html>`,

      (err) => (err ? console.error(err) : console.log("file updated!!!!"))
    );
  });
