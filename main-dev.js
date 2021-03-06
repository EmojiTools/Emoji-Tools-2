/*
 * Emoji Tools
 * Copyright (C) 2015-2017 Mitch Talmadge (https://MitchTalmadge.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const {app, BrowserWindow, Menu} = require('electron');

app.on('ready', function () {
    let mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        title: 'Emoji Tools',
        icon: __dirname + '/src/resources/images/favicon.ico',
        titleBarStyle: 'hidden',
        resizable: false,
        fullscreenable: false,
        frame: true,
        autoHideMenuBar: true,
        backgroundColor: '#f1f1f1',
        show: false,
        webPreferences: {
            webSecurity: false
        }
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });

    mainWindow.loadURL('http://localhost:9000/');
});

app.on('window-all-closed', function() {
    app.quit();
});