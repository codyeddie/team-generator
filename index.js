// import dependencies and team modules 
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");


const employees = [];

// this function starts the app 
function startApp() {
    genNewTeammate();
};

// function for adding team members
function genNewTeammate() {
    inquirer.prompt([{
        type: "input",
        name: "teammateName",
        message: "Enter the team member's name.",
        validate: teammateNameInput => {
            if (teammateNameInput) {
                return true;
            } else {
                console.log("You must enter a name for your teammate.");
                return false;
            }
        }
    },
    {
        name: "teammateRole",
        type: "list",
        message: "Select your teammate's role.",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
    },
    {
        type: "input",
        name: "teammateId",
        message: "Enter your teammmate's ID.",
        validate: teammateIdInput => {
            if (teammateIdInput) {
                return true;
            } else {
                console.log("You must enter an ID.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "teammateEmail",
        message: "Enter your teammate's email.",
        validate: teammateEmailInput => {
            if (teammateEmailInput) {
                return true;
            } else {
                console.log('You must enter an email');
                return false;
            }
        },
        // this will apply a role to the new teammate 
    }]).then(function ({ teammateName, teammateRole, teammateId, teammateEmail }) {
        let selectRole = "";
        if (teammateRole === "Manager") {
            selectRole = "officeNumber";
        } else if (teammateRole === "Engineer") {
            selectRole = "githubusername"
        } else {
            selectRole = "school"
        }
        inquirer.prompt([{
            type: "input",
            name: "selectRole",
            message: `Enter teammate's ${selectRole}`,
            validate: roleUserInput => {
                if (roleUserInput) {
                    return true;
                } else {
                    console.log('You must enter an office phone number, GitHub username, or a school if prompted!');
                    return false;
                }
            }
        },
        {
            name: "addAnotherTeammate",
            type: "list",
            choices: [
                "yes",
                "no"
            ],
            // this will allow user to enter another teammate to team 
        }]).then(function ({ selectRole, addAnotherTeammate }) {
            let teammate;
            if (teammateRole === "Manager") {
                teammate = new Manager(teammateName, teammateId, teammateEmail, selectRole);
            } else if (teammateRole === "Engineer") {
                teammate = new Engineer(teammateName, teammateId, teammateEmail, selectRole);
            } else {
                teammate = new Intern(teammateName, teammateId, teammateEmail, selectRole);
            }
            // sends new teammate to employee clas 
            employees.push(teammate);
            console.log(teammateName, employees);
            // calls genNewTeammate function if selected 
            if (addAnotherTeammate == "yes") {
                genNewTeammate();
                // ends prompts and generates the HTML file if selected 
            } else {
                let genHTML = template(employees)
                fs.writeFile('./dist/index.html',
                    genHTML,
                    function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('created and saved new team file');
                        };
                    }
                );
            }
        });
    });
};
startApp();