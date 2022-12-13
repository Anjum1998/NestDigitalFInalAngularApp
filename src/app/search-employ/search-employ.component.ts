import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employ',
  templateUrl: './search-employ.component.html',
  styleUrls: ['./search-employ.component.css']
})
export class SearchEmployComponent {
empcode=""
constructor(private api:ApiService,private router:Router){}

searchData:any=[]
  readValue=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid emp code")
        } else {
          this.searchData=response;
        }
      }
    )
  }

  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("employ deleted successfully")
          this.router.navigate(['/search'])
        } else {
          alert("can not delete")
        }
      }
    )
  }
}
