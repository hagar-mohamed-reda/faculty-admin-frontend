import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from "angular-datatables";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { TranslationComponent } from "./translation/translation.component";
import { SharedModule } from "../shared/shared.module";
import { MatSlideToggleModule } from '@angular/material';
import { AcademicYearComponent } from './components/academic-year/academic-year.component';
import { DivisionComponent } from './components/division/division.component';
import { PermissionComponent } from './components/permission/permission.component';

@NgModule({
  declarations: [
    SettingsComponent,
    TranslationComponent,
    AcademicYearComponent,
    DivisionComponent,
    PermissionComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    DataTablesModule,
    MatSlideToggleModule
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
