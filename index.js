// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
function Questions() {
    return inquirer.prompt([
      {
        type: "input",
        message: "What is the Title of your Project?",
        name: "title"
      },     
      {
        type: "input",
        message: "What is your project about?.",
        name: "description"
      },
      {
        type: "input",
        message: "What is URL of your project in GitHub?",
        name: "url"
      },
      {
        type: "input",
        message: "What is the URL to the deployed version?",
        name: "link"
      },
      {
        type: "input",
        message: "What is your username GitHub?",
        name: "user"
      },
      {
        type: "input",
        message: "What is your e-mail?",
        name: "email"
      },
      {
        type: "input",
        message: "What packages need to be installed to run your project.",
        name: "installation"
      },
      {
        type: "input",
        message: "What technologies were used to create your project.",
        name: "technology"
      },
      {
		type: "input",
		message: "What is your user story for this project?",
        name: "story",
      },
	  {
		type: "input",
		message: "What is the acceptance criteria for this project?",
        name: "criteria",
	  },
      {
        type: "list",
        name: "license",
        message: "What kind of license would you like to have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
       },
       {
        type: "input",
        message: "Including yourself, please list out all contributors",
        name: "contributer"
       },
       {
        type: "input",
        message: "What command is used to run a test",
        name: "tests",
        }
    ]); // end of return 
  }; // end of function 


// TODO: Create a function to write README file
function writetoFile(fileName, data) {
    
        fs.writeFile(fileName, data, "utf8", function (err) {
          if (err) {
            throw err;
          }
          console.log("You have successfully written your README file");
        });
      };

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await Questions();
        generateMarkdown(answers);
        writetoFile("README.md", generateMarkdown(answers));
    
        } catch (err) {
          console.log(err);
    }
};


// Function call to initialize app
init();
