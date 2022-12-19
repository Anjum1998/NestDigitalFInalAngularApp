import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-remaing-leave',
  templateUrl: './remaing-leave.component.html',
  styleUrls: ['./remaing-leave.component.css']
})
export class RemaingLeaveComponent {
  empId:any=""
  data:any=[]

  constructor(private api:ApiService){
    this.empId=localStorage.getItem("userInfo")
    let data:any={"empid":this.empId}
    console.log(data)
  this.api.vieWCount(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      this.data=response
    }
  )
  }
 
}
