import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  empid:any=""
 leavetype=""
  remarks=""
 from_date=""
  to_date=""
  constructor(private api:ApiService){
    this.empid=localStorage.getItem("userInfo")
  }
  readValue=()=>
  {
    let data:any={"empid":this.empid,"leavetype":this.leavetype,"remarks":this.remarks,"from_date":this.from_date,
    "to_date":this.to_date}
    console.log(data)
    this.api.addLeave(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("leave added successfully")
        } else {
          alert("something wrong")
        }
      }
    )
  }
}
