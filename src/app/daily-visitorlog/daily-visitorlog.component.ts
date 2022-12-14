import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-visitorlog',
  templateUrl: './daily-visitorlog.component.html',
  styleUrls: ['./daily-visitorlog.component.css']
})
export class DailyVisitorlogComponent {
  constructor(private api:ApiService){
    api.vieWVisitorLog().subscribe(
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
    this.api.vieWDailyVisitorLog(data).subscribe(
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
