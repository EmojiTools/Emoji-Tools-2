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

import {Component, OnInit} from "@angular/core";
import {FontToolsService} from "../../core/services/font-tools.service";
import {Electron} from "../../util/electron";
import {ETConstants} from "../../util/constants";

@Component({
    selector: 'et-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    pythonAvailable: boolean = undefined;

    constructor(private fontToolsService: FontToolsService) {
    }

    ngOnInit(): void {
        this.fontToolsService.isPythonAvailable().then(available => this.pythonAvailable = available);
    }

    /**
     * When the Download Python link is clicked when Python is not available.
     */
    onClickDownloadPython() {
        Electron.openExternalLink(ETConstants.PYTHON_DOWNLOAD_URL);
    }
}