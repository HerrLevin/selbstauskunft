'use strict';
const {app, protocol, BrowserWindow, shell} = require('electron')
const path = require('path');

// Adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// Prevent window being garbage collected
let mainWindow;

app.on('ready', () => {

	protocol.registerFileProtocol('atom', (request, callback) => {
		const url = request.url.substr(7)
		callback({path: path.normalize(`${__dirname}/app/${url}`)})
		}, (error) => {
		if (error) console.error('Failed to register protocol "atom"')
	});

	protocol.registerFileProtocol('nodemodules', (request, callback) => {
		const url = request.url.substr(7)
		callback({path: path.normalize(`${__dirname}/node_modules/${url}`)})
		}, (error) => {
		if (error) console.error('Failed to register protocol "nodemodules"')
	});

});

function onClosed() {
	// Dereference the window
	// For multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 600,
		height: 400
	});

	win.webContents.on('new-window', function(event, url){
		event.preventDefault();
		shell.openExternal(url);
	});

	win.loadURL(`atom://index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
