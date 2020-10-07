const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "AtlantaR32GtR",
    database: "empmanagement_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("connection has begun");
    start();
});

function start() {
    inquirer
        .prompt({
            name: "selection",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Role", "Exit"]
        }).then(({ selection }) => {      // used destructuring to access key
            // based on their answer, either call the bid or the post functions
            //use a switch case to determine which function executes
            switch (selection) {
                case "View all Departments":
                    return viewDepartment();
                    break;
                case "View all Roles":
                    return viewRoles();
                    break;
                case "view all Employees":
                    return viewEmployees();
                    break;
                default:
                    connection.end();
            }
        })
}

function viewDepartment() {
    const query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewRoles() {
    const query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewEmployees() {
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function addDepartment() {
    //use inquirer to ask the user what department they would like to add

    //in the promise of inquirer add the department to the DB and the view all departments
}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}