import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employ-view-profile',
  templateUrl: './employ-view-profile.component.html',
  styleUrls: ['./employ-view-profile.component.css']
})
export class EmployViewProfileComponent {
  empId:any=""
  data:any=[]
constructor(private api:ApiService){

  this.empId=localStorage.getItem("userInfo")
    let data:any={
      "id":this.empId
    }
    this.api.empViewProf(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
 
}

