import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {
empid:any=""
searchData:any=[]
constructor(private api:ApiService){
  this.empid=localStorage.getItem("userInfo")
}

readValue=()=>
{
  let data:any={"empid":this.empid}
  console.log(data)
  this.api.searchStatus(data).subscribe(
    (response:any)=>
    {
     this.searchData=response
      
    }
  )
}
data:any=[]
}
