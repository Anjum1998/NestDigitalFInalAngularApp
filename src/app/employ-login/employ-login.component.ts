import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employ-login',
  templateUrl: './employ-login.component.html',
  styleUrls: ['./employ-login.component.css']
})
export class EmployLoginComponent {
  username=""
  password=""
searchUser:any=[]
constructor(private api:ApiService,private router:Router){}
readValue=()=>
  {
    let data:any= {
      "username":this.username,"password":this.password
    }
    console.log(data)
    this.api.empLogin(data).subscribe(
      (response:any)=>
      {
        this.username=""
        this.password=""
        console.log(response)
        if (response.status=="success") {
          this.searchUser=response; 
          let empId=response.empId
          console.log(empId)
          localStorage.setItem("userInfo",empId)
          this.router.navigate(['/searchemp'])
        }
        else{
          alert(response.message)
        }
       
       
      }
    )
  }
}
