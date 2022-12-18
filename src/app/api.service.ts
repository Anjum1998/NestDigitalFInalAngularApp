import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addemp",data)
  }

  addLeave=(data:any)=>
  {
    return this.http.post("http://localhost:8080/leaveapply",data)
  }
  addSecurity=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  vieWEmploy=()=>
  {
    return this.http.get("http://localhost:8080/viewemp")
  }

  searchEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/searchemp",data)
  }

  deleteEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/empdelete",data)
  }

  empLogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/emplogin",data)
  }
  empViewProf=(data:any)=>
  {
    return this.http.post("http://localhost:8080/empprofile",data)
  }
  securityLogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/securitylogin",data)
  }
  addEmpLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/logemp",data)
  }
  addVisitorLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/logvisitor",data)
  }
  vieWEmployLog=()=>
  {
    return this.http.get("http://localhost:8080/viewallemplog")
  }
  vieWDailyEmployLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewdailyemplog",data)
  }
  vieWVisitorLog=()=>
  {
    return this.http.get("http://localhost:8080/viewallvisitorlog")
  }
  vieWDailyVisitorLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewDailyVisitorlog",data)
  }

  securityViewProf=(data:any)=>
  {
    return this.http.post("http://localhost:8080/securityprofile",data)
  }
  vieWSecurity=()=>
  {
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  vieWAllLeave=()=>
  {
    return this.http.get("http://localhost:8080/viewallleavebyemp")
  }
  updateStatus=(data:any)=>
  {
    return this.http.post("http://localhost:8080/update",data)
  }
  acceptLeave=(data:any)=>
  {
    return this.http.post("http://localhost:8080/accept",data)
  }
  searchStatus=(data:any)=>
  {
    return this.http.post("http://localhost:8080/searchstatus",data)
  }
  updateCounter=(data:any)=>
  {
    return this.http.post("http://localhost:8080/updatecounter",data)
  }
  vieWCount=()=>
  {
    return this.http.get("http://localhost:8080/viewcount")
  }

}
