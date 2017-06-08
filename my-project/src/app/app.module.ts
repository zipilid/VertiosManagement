import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { MdDialogModule,MdDatepickerModule,MdMenuModule,MdNativeDateModule,MdGridListModule, MdInputModule, MdTabsModule, MaterialModule, MdListModule, MdSidenavModule, MdCommonModule, MdIconModule, MdCardModule, MdCoreModule, MdLineModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FeatureService } from './service/feature.service';
import { FilterService } from './service/filter.service';
import { VertionService } from './service/vertion.service';
import { UserService } from './service/user.service';
import { AuthGuardService } from './service/auth-guard.service';
import { ListAccordionComponent } from './list-accordion/list-accordion.component';
import { AddComponent } from './add/add.component';
import { FilterPipe } from './pipe/filter.pipe';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeatureFilterPipe } from './pipe/feature-filter.pipe';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { VertionComponent } from './vertion/vertion.component';


let myRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent /*,canActivate:[AuthGuardService]*/},
  { path: 'profile', component: ProfileComponent /*,canActivate:[AuthGuardService]*/},
  { path: 'edit/:id', component: EditComponent /*,canActivate:[AuthGuardService]*/},
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list' }

];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListAccordionComponent,
    AddComponent,
    FilterPipe,
    DialogComponent,
    DialogContentComponent,
    LoginComponent,
    RegisterComponent,
    FeatureFilterPipe,
    ProfileComponent,
    EditComponent,
    VertionComponent

  ],
  imports: [
    RouterModule.forRoot(myRoutes, { useHash: true }),
    MdInputModule, MdListModule, MdTabsModule,MdGridListModule,MdMenuModule, MdCommonModule,MdNativeDateModule,MdDatepickerModule, MdDialogModule, MdSidenavModule, MdIconModule, MdCardModule, MdCoreModule, MdLineModule, MdButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [FeatureService,
    FilterService,
    AuthGuardService,
    VertionService,
    UserService],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentComponent]
})
export class AppModule { }
