import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {
empcode=""
name=""
username=""
password=""
constructor(private api:ApiService){}
readValue=()=>
{
  let data:any={"empcode":this.empcode,"name":this.name,"username":this.username,"password":this.password}
  console.log(data)
  this.api.addSecurity(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("security added successfully")
        this.empcode=""
        this.name=""
        this.password=""
        this.username=""
      } else {
        alert("something wrong")
      }
    }
  )
}

}
