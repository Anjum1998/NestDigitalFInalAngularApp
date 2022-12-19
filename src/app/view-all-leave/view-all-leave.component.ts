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

  readValue=(data:any,id:any)=>{

    this.statusvalue=1;

    let accept:any={"empid":data,"status":this.statusvalue,"id":id}
    console.log(accept)
    localStorage.setItem("statuss",this.statusvalue)

    this.api.updateStatus(accept).subscribe(

      (response:any)=>{

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)
          this.api.updateCounter(accept).subscribe(
            (response:any)=>
            {
              console.log(response)
            }
          )

          alert("success")
          window.location.reload()
        } else {

          alert("failed")
         }

      }

    )

  }
  
  rejectValue=(data:any,id:any)=>{

    this.statusvalue=-1;

    let reject:any={"empid":data,"status":this.statusvalue,"id":id}
    localStorage.setItem("statuss",this.statusvalue)

    this.api.updateStatus(reject).subscribe(

      (response:any)=>{

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)

          alert("success")
          window.location.reload()
        } else {

          alert("failed")
         }

      }

    )

  }
  
}
