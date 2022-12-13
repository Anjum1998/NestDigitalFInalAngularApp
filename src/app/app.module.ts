import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { ViewEmployComponent } from './view-employ/view-employ.component';
import { SearchEmployComponent } from './search-employ/search-employ.component';
import { EmployLoginComponent } from './employ-login/employ-login.component';
import { EmployViewProfileComponent } from './employ-view-profile/employ-view-profile.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { NavbarEmpComponent } from './navbar-emp/navbar-emp.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"empadd",
    component:AddEmployComponent
  },
  {
    path:"viewemp",
    component:ViewEmployComponent
  },
  {
    path:"searchemp",
    component:SearchEmployComponent
  },
  {
    path:"emplog",
    component:EmployLoginComponent
  },
  {
    path:"empviewprof",
    component:EmployViewProfileComponent
  },
  {
    path:"addsecurity",
    component:AddSecurityComponent
  },
  {
    path:"leave",
    component:ApplyLeaveComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarAdminComponent,
    AddEmployComponent,
    ViewEmployComponent,
    SearchEmployComponent,
    EmployLoginComponent,
    EmployViewProfileComponent,
    AddSecurityComponent,
    NavbarEmpComponent,
    ApplyLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
