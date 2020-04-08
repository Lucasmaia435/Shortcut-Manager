const fs = require('fs');
const { exec } = require('child_process');
const { globalShortcut } = require('electron');

let exec_count = 0;
let exec_files = [];
let Shortcuts = [];
module.exports = {
    getShortcuts() {
        var json = JSON.parse(fs.readFileSync('./shortcuts.json').toString());

        return (json);
    },
    registerShortcuts(data) {
        for (let i = 0; i < data.length; i++){
            if (data[i].type === "exec") {
                exec_files.push('"_"');
                exec_files[exec_count] = exec_files[exec_count].replace('_', data[i].file);
                Shortcuts.push(data[i].name);
                this.registerExec(data[i].name,exec_files[exec_count],data[i].shortcut);
                exec_count++;
            }
            else if(data[i].type === "console"){
                this.registerConsole(data[i].name,data[i].console,data[i].shortcut);
            }else if(data[i].type === "command"){
                this.registerCommand(data[i].name,data[i].command,data[i].shortcut);
            }
        }
        
    },
    registerExec(name,file,shortcut){
        globalShortcut.register(shortcut, () => {
            exec(`${file}`, (error, stdout, stderr) => {
                if (stderr) {
                    console.error(`exec error: ${error}`);
                }
                console.log(`Shortcut ${name}`);
            });
        });
        console.log(`Created shortcut for ${name}`);
    },
    registerConsole(name,command,shortcut){
        globalShortcut.register(shortcut, () => {
            console.log(command);
        });
        console.log(`Created shortcut for ${name}`);
    },
    registerCommand(name,command,shortcut){
        globalShortcut.register(shortcut, () => {
            exec(command, (error) => {
                if(error){
                    console.log(`Command error: ${error}`);
                }
            })
        });
        console.log(`Created shortcut for ${name}`);
    }
}