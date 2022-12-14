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

}
