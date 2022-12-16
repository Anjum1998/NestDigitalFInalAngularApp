import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css']
})
export class VisitorLogComponent {
  name=""
  purpose=""
  whomtomeet=""
  date=""
  entry_datetime=""
  exit_datetime=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"name":this.name,"purpose":this.purpose,"whomtomeet":this.whomtomeet,date:this.date,
  "entry_datetime":this.entry_datetime,"exit_datetime":this.exit_datetime}
  console.log(data)
    this.api.addVisitorLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("log success")
          this.date=""
          this.entry_datetime=""
          this.exit_datetime=""
          this.name=""
          this.purpose=""
          this.whomtomeet=""
        } else {
          alert("not allowed")
        }
      }
    )
  }
}
