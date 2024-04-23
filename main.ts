#! /usr/bin/env node
import inquirer from "inquirer";

let todolist:string [] = [];
let conditions = true;
console.log("wellcome to code with mrsfaisal-todo-list application");

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt(
            [
                {
                    name: "choice",
                    type: "list",
                    message: "select an option you want to do",
                    choices: ["Add task", "Delete task", "Update task", "View todo-list", "Exit"],
                }
            ]
        );
        if(option.choice === "Add task"){
            await addTask()
        }
        else if(option.choice === "Delete task"){
            await deleteTask()
        }
        else if(option.choice === "Update task"){
            await updateTask()
        }
        else if(option.choice === "View todo-list"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    }
}
let addTask = async() => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]
        
    );
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in todo-list`);
}
let viewTask = () => {
    console.log("\n your todo-list: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1 }: ${task}`)
    });
    console.log("\n");
}
let deleteTask = async () => {
await viewTask()
let taskIndex = await inquirer.prompt(
    [
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }
    ]
);
let deletedtask = todolist.splice(taskIndex.index - 1, 1);
console.log(`\n ${deletedtask} this task has deleted successfully from your todo-list\n`);
}
let updateTask = async () => {
    await viewTask()
    let updated_task_index = await inquirer.prompt(
        [
           {
                name: "index",
                type: "number",
                message: "Enter the 'index no' of the task you want to update:"

            },
            {
                name:"new_task",
                type: "input",
                message: "Now enter new task name:", 
            }
        ]
    );
    todolist[updated_task_index.index - 1] = updated_task_index.new_task
    console.log(`\n Task at index no. ${updated_task_index.index - 1}updated successfully [for updated list check option: "view todolist"]`)
}
main();
