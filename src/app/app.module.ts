import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './shared/interceptors';
import { SharedModule } from './shared/shared.module';
import { AuthGuestService } from './shared/middlewares/auth-guest.service';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './shared/services/auth.service';
import { LayoutComponent } from './core/layout.component';
import { AppComponent } from './core/app.component';
import { AuthComponent } from './core/auth.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TranslationService } from './shared/services/translation.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { DataTablesModule } from '../../node_modules/angular-datatables';
import { UserService } from './user/services/user.service';
import { RoleService } from './user/services/role.service';
import { StudentIndexComponent } from './components/student/student-index/student-index.component';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { DoctorIndexComponent } from './components/doctor/doctor-index/doctor-index.component';
import { DoctorFormComponent } from './components/doctor/doctor-form/doctor-form.component';
import { CourseIndexComponent } from './components/course/course-index/course-index.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { CourseShowComponent } from './components/course/course-show/course-show.component';
import { CourseRegisterDoctorComponent } from './components/course/course-register-doctor/course-register-doctor.component';
import { CourseRegisterStudentComponent } from './components/course/course-register-student/course-register-student.component';
import { UserIndexComponent } from './components/user/user-index/user-index.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { RoleIndexComponent } from './components/role/role-index/role-index.component';
import { RoleFormComponent } from './components/role/role-form/role-form.component';
import { PermissionComponent } from './components/role/permission/permission.component';
import { FacultyIndexComponent } from './components/faculty/faculty-index/faculty-index.component';
import { FacultyFormComponent } from './components/faculty/faculty-form/faculty-form.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AuthComponent,
    AppComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    StudentIndexComponent,
    StudentFormComponent,
    DoctorIndexComponent,
    DoctorFormComponent,
    CourseIndexComponent,
    CourseFormComponent,
    CourseShowComponent,
    CourseRegisterDoctorComponent,
    CourseRegisterStudentComponent,
    UserIndexComponent,
    UserFormComponent,
    RoleIndexComponent,
    RoleFormComponent,
    PermissionComponent,
    FacultyIndexComponent,
    FacultyFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
    }),
    AppRoutingModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [
    httpInterceptorProviders,
    TranslationService,
    AuthService,
    AuthGuestService,
    UserService,
    RoleService,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  public static doc: any = document;

  constructor() {
  }



}
