import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-leave',
  templateUrl: './view-all-leave.component.html',
  styleUrls: ['./view-all-leave.component.css']
})
export class ViewAllLeaveComponent {
  constructor(private api:ApiService){
    api.vieWAllLeave().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
  statusvalue:any={}

  readValue=(data:any)=>{

    this.statusvalue=1;

    let accept:any={"empid":data,"status":this.statusvalue}

    this.api.updateStatus(accept).subscribe(

      (response:any)=>{

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)

          alert("success")
        } else {

          alert("failed")
         }

      }

    )

  }
  
  rejectValue=(data:any)=>{

    this.statusvalue=-1;

    let accept:any={"empid":data,"status":this.statusvalue}

    this.api.updateStatus(accept).subscribe(

      (response:any)=>{

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)

          alert("success")
        } else {

          alert("failed")
         }

      }

    )

  }
  
}
