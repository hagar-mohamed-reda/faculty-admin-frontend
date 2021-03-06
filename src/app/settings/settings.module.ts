import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from "angular-datatables";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { TranslationComponent } from "./translation/translation.component";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatTableModule } from '@angular/material';
import { AcademicYearComponent } from './components/academic-year/academic-year.component';
import { DivisionComponent } from './components/division/division.component';
import { PermissionComponent } from './components/permission/permission.component';
import { SpecialComponent } from './components/special/special.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { DegreeComponent } from './components/degree/degree.component';
import { DegreeMapComponent } from './components/degree-map/degree-map.component';
import { ResearchDegreeMapComponent } from './components/research-degree-map/research-degree-map.component';
import { GlobalSettingComponent } from './components/global-setting/global-setting.component';
import { EditTermComponent } from './components/edit-term/edit-term.component';

@NgModule({
  declarations: [
    SettingsComponent,
    TranslationComponent,
    AcademicYearComponent,
    DivisionComponent,
    PermissionComponent,
    SpecialComponent,
    FacultyComponent,
    DegreeComponent,
    DegreeMapComponent,
    ResearchDegreeMapComponent,
    GlobalSettingComponent,
    EditTermComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  exports: [SettingsComponent],
})

export class SettingsModule {}
