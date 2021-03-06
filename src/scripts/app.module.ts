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

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CoreModule} from "./core/core.module";
import {AppComponent} from "./app/app.component";
import {VendorModule} from "./vendors/vendors.module";
import {FeaturesModule} from "./features/features.module";
import {CommonModule} from "@angular/common";
import {AppRoutesModule} from "./app.routes";
import {FooterComponent} from "./app/footer/footer.component";
import {HeaderModule} from "./app/header/header.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        CoreModule,
        VendorModule,
        FeaturesModule,
        AppRoutesModule,

        HeaderModule
    ],
    declarations: [
        AppComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}