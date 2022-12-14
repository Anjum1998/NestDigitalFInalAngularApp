import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-emp-log',
  templateUrl: './daily-emp-log.component.html',
  styleUrls: ['./daily-emp-log.component.css']
})

export class DailyEmpLogComponent {
  constructor(private api:ApiService){
    api.vieWEmploy().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.vieWDailyEmployLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("invalid")
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]
}


