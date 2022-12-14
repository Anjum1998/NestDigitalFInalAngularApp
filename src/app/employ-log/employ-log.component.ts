import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employ-log',
  templateUrl: './employ-log.component.html',
  styleUrls: ['./employ-log.component.css']
})
export class EmployLogComponent {
  empid=""
  date=""
  entry_datetime=""
  exit_datetime=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"empid":this.empid,"date":this.date,"entry_datetime":this.entry_datetime,"exit_datetime":this.exit_datetime}
    console.log(data)
    this.api.addEmpLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("successfully added")
        } else {
          alert("wrong data")
        }
      }
    )
  }
}
