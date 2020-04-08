const { app, Menu, Tray } = require('electron');
const shortcut  = require('./shortcut');


var state = true;
var label = 'Atalhos';
const commands = shortcut.getShortcuts();

app.on('ready', () => {
    const tray = new Tray("assets/baseline_gamepad_black_18dp.png");

    const contextMenu = Menu.buildFromTemplate([
        {
            label: label, type: 'checkbox', checked: state
        }
    ]);

    tray.setToolTip('Atalhos');
    tray.setContextMenu(contextMenu);

    shortcut.registerShortcuts(commands);
    
});

