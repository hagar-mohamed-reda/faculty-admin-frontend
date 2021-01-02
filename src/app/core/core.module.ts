import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {NavBarComponent} from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavBarComponent,
    SidebarComponent
  ]
})
export class CoreModule {
}
