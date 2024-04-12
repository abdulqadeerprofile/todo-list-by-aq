#!/usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let condition = true;

    while (condition) {
        let add_person = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "Add a person to your todo list"
            },
            {
                name: "confirm",
                type: "confirm",
                message: "Confirm to add this person?",
                default: false
            }
        ]);

        todos.push(add_person.todo);
        condition = add_person.confirm;
        console.log(todos);
        
    }

