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
    message: "Enter the ENGINEER ID:",
    name: "engId",
  },
  {
    type: "input",
    message: "Enter the ENGINEER email id:",
    name: "engEmail",
  },
  {
    type: "input",
    message: "Enter the ENGINEER gIthub account:",
    name: "engGithub",
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
    message: "Enter the intern ID:",
    name: "internId",
  },
  {
    type: "input",
    message: "Enter the intern email id:",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Enter the intern gIthub account:",
    name: "internGithub",
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
      // const obj = new Employee(engAnswers.engName, engAnswers.engID);
      // obj.break;
      fs.writeFile(
        "index.html",
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                    <div class="card employee-card">
                    <div class="card-header bg-primary">
                        <h2 class="card-title">${engAnswers.engName}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${answers.options}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${engAnswers.engId}</li>
                            <li class="list-group-item">Email:${engAnswers.engEmail}</li>
                            <li class="list-group-item">GitHub:${engAnswers.engGithub}</li>
                        </ul>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        
        
        
        
        
        `,

        (err) => (err ? console.error(err) : console.log("file updated!!!!"))
      );
      break;
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
