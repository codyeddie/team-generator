const Employee = require("../lib/Employee");

const genTeam = team => {
    const genManager = manager => {
        return `
        <div class="card members">
            <div class="card-header bg-info">
        <h2 class="card-title text-center">${manager.getName()}</h2>
        <h3 class="card-title text-center"><i class="fab fa-blogger-b mr-1">${manager.getRole()}</i></h3>
        </div>
            <div class="card-body">
                 <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                     <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
             </div>
        </div>
        `;
    };

    const genEngineer = engineer => {
        return `
        <div class="card members">
            <div class="card-header bg-info">
        <h2 class="card-title text-center">${engineer.getName()}</h2>
        <h3 class="card-title text-center"><i class="fas fa-brain mr-1">${engineer.getRole()}</i></h3>
        </div>
            <div class="card-body">
                 <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                     <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}"target="_blank">${engineer.getGithub()}</a></li>
                </ul>
             </div>
        </div>
        `;
    };

    const genIntern = intern => {
        return `
        <div class="card members">
            <div class="card-header bg-info">
        <h2 class="card-title text-center">${intern.getName()}</h2>
        <h3 class="card-title text-center"><i class="fas fa-book-open mr-1">${intern.getRole()}</i></h3>
        </div>
            <div class="card-body">
                 <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                     <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
             </div>
        </div>
        `;
    };

    // user imput is pushed to HTML to display team page 
    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => genManager(manager))
    );
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => genEngineer(engineer)).join("")
    );
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => genIntern(intern)).join("")
    );

    return html.join("");
}

// this page will display without the employee having a role
module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 fs-1 bg-primary">
                <h1 class="text-center">Team Page</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="teams col-12 d-flex justify-content-evenly">
                ${genTeam
            (team)}
            </div>
        </div>
    </div>
        
</body>
</html>
`;
};