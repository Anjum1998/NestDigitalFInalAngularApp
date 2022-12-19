import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {
id:any=""
empId:any=""
statusvalue:any=[]

constructor(private api:ApiService){
  this.id=localStorage.getItem("uid")
  

}

readValue=()=>
{
  let data:any={"id":this.id}
  console.log(data)
  this.api.searchStatus(data).subscribe(
    (response:any)=>
    {
     this.statusvalue=response
      
    }
  )
}
data:any=[]






}
