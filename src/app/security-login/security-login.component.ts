import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
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
    this.api.securityLogin(data).subscribe(
      (response:any)=>
      {
        this.username=""
        this.password=""
        console.log(response)
        if (response.status=="success") {
          this.searchUser=response; 
          let securityId=response.securityId
          console.log(securityId)
          localStorage.setItem("userInfos",securityId)
          this.router.navigate(['/securityprofile'])
        }
        else{
          alert(response.message)
        }
       
       
      }
    )
  }
}
