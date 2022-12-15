import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {
  securityId:any=""
  constructor(private api:ApiService){
    this.securityId=localStorage.getItem("userInfos")
    let data:any={
        "id":this.securityId
    }
    this.api.securityViewProf(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
  data:any=[]
}
