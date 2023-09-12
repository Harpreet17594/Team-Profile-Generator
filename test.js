import inquirer from "inquirer";
import fs from "fs";

// let engineer = require("./Employee");

const questions = [
  {
    type: "list",
    message: " options to choose : ",
    name: "options",
    choices: [
      {
        key: "engineer",
        value: "engineer",
      },
      {
        key: "intern",
        value: "intern",
      },
      {
        key: "exit",
        value: "exit",
      },
    ],
  },
];

//questions to ask for engineer
const engineerQuestions = [
  {
    type: "input",
    message: "Enter the ENGINEER:",
    name: "engName",
  },
  {
    type: "input",
    message: "Enter the ENGINEER Email ID:",
    name: "engID",
  },
];
//questions to ask for intern
const internQuestions = [
  {
    type: "input",
    message: "Enter the intern:",
    name: "internName",
  },
  {
    type: "input",
    message: "Enter the intern Email ID:",
    name: "internID",
  },
];

//1st inquirer
// inquirer.prompt(questions).then((answers) => {}); //es5 syntax (old syntax)

const askGenQuestion = async () => {
  let internAnswers;
  let engAnswers;
  const answers = await inquirer.prompt(questions);

  switch (answers.options) {
    case "engineer":
      engAnswers = await inquirer.prompt(engineerQuestions);
      //send to classes
      const obj = new Employee(engAnswers.engName, engAnswers.engID);
      obj.break;

    case "intern":
      internAnswers = await inquirer.prompt(internQuestions);
      break;

    case "exit":
      break;
  }

  const finalAnswers = {
    ...answers,
    ...engAnswers,
    ...internAnswers,
  };

  console.log(finalAnswers);
};
askGenQuestion();
