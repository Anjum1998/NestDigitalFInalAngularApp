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
import { SecurityLoginComponent } from './security-login/security-login.component';
import { EmployLogComponent } from './employ-log/employ-log.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { ViewEmplogComponent } from './view-emplog/view-emplog.component';
import { DailyEmpLogComponent } from './daily-emp-log/daily-emp-log.component';
import { ViewVisitorlogComponent } from './view-visitorlog/view-visitorlog.component';
import { DailyVisitorlogComponent } from './daily-visitorlog/daily-visitorlog.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { ViewAllLeaveComponent } from './view-all-leave/view-all-leave.component';
import { HomeComponent } from './home/home.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admin",
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
    path:"emplogin",
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
  },
  {
    path:"securitylog",
    component:SecurityLoginComponent
  },
  {
    path:"emplog",
    component:EmployLogComponent
  },
  {
    path:"visitorlog",
    component:VisitorLogComponent
  },
  {
    path:"viewemplog",
    component:ViewEmplogComponent
  },
  {
    path:"dailyemplog",
    component:DailyEmpLogComponent
  },
  {
    path:"viewvisitorlog",
    component:ViewVisitorlogComponent
  },
  {
    path:"dailyvisitorlog",
    component:DailyVisitorlogComponent
  },
  {
    path:"securityprofile",
    component:SecurityProfileComponent
  },
  {
    path:"viewsecurity",
    component:ViewSecurityComponent
  },
  {
    path:"viewallleave",
    component:ViewAllLeaveComponent
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
    ApplyLeaveComponent,
    SecurityLoginComponent,
    EmployLogComponent,
    SecurityNavbarComponent,
    VisitorLogComponent,
    ViewEmplogComponent,
    DailyEmpLogComponent,
    ViewVisitorlogComponent,
    DailyVisitorlogComponent,
    SecurityProfileComponent,
    ViewSecurityComponent,
    ViewAllLeaveComponent,
    HomeComponent,
    HomeNavbarComponent
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
